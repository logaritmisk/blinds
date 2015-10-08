import React, { Component } from 'react'

import TimerActionCreators from '../actions/TimerActionCreators'

import RoundStore from '../stores/RoundStore'
import TimerStore from '../stores/TimerStore'

import RoundTimer from './RoundTimer.react'
import RoundBlinds from './RoundBlinds.react'


class TimerReset extends Component {
  render() {
    let status = this.props.status

    return (
      <span className="button" onClick={this._onClick.bind(this)}>
        Reset
      </span>
    )
  }

  _onClick() {
    if (this.props.status == 'paused' || this.props.status == 'ended') {
      TimerActionCreators.resetTimer()
    }
  }
}

TimerReset.propTypes = {
  status: React.PropTypes.string.isRequired
}


class TimerToggle extends Component {
  render() {
    let status = this.props.status
    let text = ''

    switch (this.props.status) {
      case 'started':
        text = 'Pause'
        break

      case 'paused':
        text = 'Resume'
        break

      default:
        text = 'Start'
        break
    }

    return (
      <span className="button" onClick={this._onClick.bind(this)}>
        {text}
      </span>
    )
  }

  _onClick() {
    let status = this.props.status

    if (status == 'stopped' || status == 'paused') {
      TimerActionCreators.startTimer()
    } else {
      TimerActionCreators.pauseTimer()
    }
  }
}

TimerToggle.propTypes = {
  status: React.PropTypes.string.isRequired
}


class RoundActive extends Component {
  constructor(props) {
    super(props)

    this.state = this._getStateFromStores()
  }

  componentDidMount() {
    RoundStore.addChangeListener(this._onChange.bind(this))
    TimerStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    RoundStore.removeChangeListener(this._onChange.bind(this))
    TimerStore.removeChangeListener(this._onChange.bind(this))
  }

  render() {
    return (
      <div id="active">
        <RoundTimer
          secondsRemaining={this.state.timerRemaining}
        />
        <RoundBlinds
          smallBlind={this.state.activeRound.smallBlind}
          bigBlind={this.state.activeRound.bigBlind}
        />
        <div className="timer-controllers">
          <TimerReset status={this.state.timerStatus} />
          <TimerToggle status={this.state.timerStatus} />
        </div>
      </div>
    )
  }

  _getStateFromStores() {
    let active = RoundStore.getActive()

    return {
      activeRound: RoundStore.getRound(active),
      timerStatus: TimerStore.getStatus(),
      timerRemaining: TimerStore.getRemaining()
    }
  }

  _onChange() {
    this.setState(this._getStateFromStores())
  }
}


export default RoundActive
