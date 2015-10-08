import React, { Component } from 'react'


class RoundTimer extends Component {
  render() {
    let minutes = Math.trunc(this.props.secondsRemaining / 60)
    let seconds = this.props.secondsRemaining % 60

    return (
      <div className="round-timer">
        {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
      </div>
    )
  }
}

RoundTimer.propTypes = {
  secondsRemaining: React.PropTypes.number.isRequired
}


export default RoundTimer
