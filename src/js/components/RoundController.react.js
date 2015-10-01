var RoundActionCreators = require('../actions/RoundActionCreators')
var RoundItem = require('./RoundItem.react')

var React = require('react')


class RoundController extends RoundItem {
  constructor(props) {
    super(props)

    this.state = { isRunning: false }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderController() {
    var controllers = []

    controllers.push(<span key='toggle' onClick={this._toggle.bind(this)}>{this.state.isRunning ? 'Stop' : 'Start'}</span>)

    if (!this.state.isRunning && this.props.round.secondsRemaining != this.props.round.roundLength) {
      controllers.push(<span key='reset' onClick={this._reset.bind(this)}>Reset</span>)
    }

    return controllers
  }

  render() {
    return (
      <div>
        {this.renderTimer()}
        {this.renderBlinds()}
        {this.renderController()}
      </div>
    )
  }

  _tick() {
    RoundActionCreators.tick(this.props.round.id)
  }

  _toggle() {
    if (this.state.isRunning) {
      clearInterval(this.interval)
    } else {
      this.interval = setInterval(this._tick.bind(this), 1000)
    }

    this.setState({ isRunning: !this.state.isRunning })
  }

  _reset() {
    RoundActionCreators.reset(this.props.round.id)
  }
}

RoundController.propTypes = {
  round: React.PropTypes.object.isRequired
}


export default RoundController
