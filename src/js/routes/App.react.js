import React, { Component } from 'react'

import RoundActionCreators from '../actions/RoundActionCreators'

import TimerStore from '../stores/TimerStore'

import RoundList from '../components/RoundList.react'
import RoundActive from '../components/RoundActive.react'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = this._getStateFromStores()
  }

  componentDidMount() {
    RoundActionCreators.setActiveRound(0)

    TimerStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    TimerStore.removeChangeListener(this._onChange.bind(this))
  }

  render() {
    let className = ''

    if (this.state.timerStatus == 'ended') {
      className = 'timer-ended'
    }

    return (
      <div id="timer" className={className}>
        <RoundList />
        <RoundActive />
      </div>
    )
  }

  _getStateFromStores() {
    return {
      timerStatus: TimerStore.getStatus(),
    }
  }

  _onChange() {
    this.setState(this._getStateFromStores())
  }
}


export default App
