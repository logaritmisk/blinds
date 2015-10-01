var RoundActionCreators = require('../actions/RoundActionCreators')
var RoundStore = require('../stores/RoundStore')

var React = require('react')


class RoundItem extends React.Component {
  constructor(props) {
    super(props)
  }

  renderTimer() {
    var secondsRemaining = this.props.round.secondsRemaining

    var minutes = Math.trunc(secondsRemaining / 60)
    var seconds = secondsRemaining % 60

    return (
      <div>
        {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
      </div>
    )
  }

  renderBlinds() {
    return (
      <div>
        {this.props.round.smallBlind}/{this.props.round.bigBlind}
      </div>
    )
  }

  render() {
    return (
      <div onClick={this._onClick.bind(this)}>
        {this.renderTimer()}
        {this.renderBlinds()}
      </div>
    )
  }

  _onClick() {
    RoundActionCreators.setActive(this.props.round.id)
  }
}

RoundItem.propTypes = {
  round: React.PropTypes.object.isRequired
}


export default RoundItem
