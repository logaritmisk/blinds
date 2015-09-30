var React = require('react')


class RoundItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsRemaining: this.props.roundLength
    }

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
        {this.props.smallBlind}/{this.props.bigBlind}
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
  smallBlind: React.PropTypes.number.isRequired,
  bigBlind: React.PropTypes.number.isRequired,
  roundLength: React.PropTypes.number
}


export default RoundItem
