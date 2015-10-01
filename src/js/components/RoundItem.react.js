var RoundStore = require('../stores/RoundStore')

var React = require('react')


class RoundItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = RoundStore.getRound(this.props.round)
  }

  renderTimer() {
    var secondsRemaining = this.state.secondsRemaining

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
        {this.state.smallBlind}/{this.state.bigBlind}
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
  round: React.PropTypes.number.isRequired
}


export default RoundItem
