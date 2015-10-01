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
      <div>
        {this.renderTimer()}
        {this.renderBlinds()}
      </div>
    )
  }
}

RoundItem.propTypes = {
  round: React.PropTypes.object.isRequired
}


export default RoundItem
