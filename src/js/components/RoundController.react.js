var RoundItem = require('./RoundItem.react')

var React = require('react')


class RoundController extends RoundItem {
  constructor(props) {
    super(props)

    this.state.isRunning = false
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 })
  }

  renderController() {
    var controllers = []

    controllers.push(<span key='toggle' onClick={this._toggleTimer.bind(this)}>{this.state.isRunning ? 'Stop' : 'Start'}</span>)

    if (!this.state.isRunning && this.state.secondsRemaining != this.props.roundLength) {
      controllers.push(<span key='reset' onClick={this._resetTimer.bind(this)}>Reset</span>)
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

  _toggleTimer() {
    if (this.state.isRunning) {
      clearInterval(this.interval)
    } else {
      this.interval = setInterval(this.tick.bind(this), 1000)
    }

    this.setState({ isRunning: !this.state.isRunning })
  }

  _resetTimer() {
    this.setState({ secondsRemaining: this.state.roundLength })
  }
}

RoundController.propTypes = {
  round: React.PropTypes.number.isRequired
}


export default RoundController
