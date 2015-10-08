import React, { Component } from 'react'

import RoundActionCreators from '../actions/RoundActionCreators'

import RoundList from '../components/RoundList.react'
import RoundActive from '../components/RoundActive.react'


class App extends Component {
  componentDidMount() {
    RoundActionCreators.setActiveRound(0)
  }

  render() {
    return (
      <div id="timer">
        <RoundList />
        <RoundActive />
      </div>
    )
  }
}


export default App
