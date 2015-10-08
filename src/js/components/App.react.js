import React, { Component } from 'react'

import RoundActionCreators from '../actions/RoundActionCreators'

import RoundList from './RoundList.react'
import RoundActive from './RoundActive.react'


class App extends Component {
  componentDidMount() {
    RoundActionCreators.setActiveRound(0)
  }

  render() {
    return (
      <div id="app">
        <RoundList />
        <RoundActive />
      </div>
    )
  }
}


export default App
