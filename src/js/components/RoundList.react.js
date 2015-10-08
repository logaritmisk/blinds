import React, { Component } from 'react'

import RoundActionCreators from '../actions/RoundActionCreators'

import RoundStore from '../stores/RoundStore'

import RoundBlinds from './RoundBlinds.react.js'


class RoundList extends Component {
  constructor(props) {
    super(props)

    this.state = this._getStateFromStores()
  }

  componentDidMount() {
    RoundStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    RoundStore.removeChangeListener(this._onChange.bind(this))
  }

  render() {
    return (
      <div id="rounds">
        {this.state.rounds.map((round, i) => {
          return (
            <div key={i} className="round-item" onClick={event => { RoundActionCreators.setActiveRound(i) }}>
              <span className="round-number">{i + 1}</span>
              <RoundBlinds
                smallBlind={round.smallBlind}
                bigBlind={round.bigBlind}
              />
            </div>
          )
        })}
      </div>
    )
  }

  _getStateFromStores() {
    return {
      active: RoundStore.getActive(),
      rounds: RoundStore.getRounds()
    }
  }

  _onChange() {
    this.setState(this._getStateFromStores())
  }
}


export default RoundList
