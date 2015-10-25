import React, { Component } from 'react'

import moment from 'moment'

import RoundActionCreators from '../actions/RoundActionCreators'


class Import extends Component {
  render() {
    return (
      <div id="import">
        <textarea ref={ref => this.dataInput = ref }></textarea>
        <div className="import-controllers">
          <span className="button" onClick={this._onClick.bind(this)}>Save</span>
        </div>
      </div>
    )
  }

  _onClick() {
    let re = /^(\d+)\. \[\+(\d+:\d+)\] -- (\d+) \/ (\d+)$/
    let rounds = []
    let prev_round = 0
    let prev_duration = 0

    this.dataInput.value.split('\n').forEach((line, i) => {
      let info = re.exec(line)

      if (i > 0) {
        let duration = moment.duration(info[2]).asSeconds()
        rounds[prev_round].length = duration - prev_duration
        prev_duration = duration
      }

      let round = {
        type: 'round',
        round: i + 1,
        smallBlind: parseInt(info[3]),
        bigBlind: parseInt(info[4]),
        length: 0
      }

      rounds.push(round)

      prev_round = rounds.length - 1

      if ((i + 1) % 3 == 0) {
        rounds.push({
          type: 'break',
          length: 60 * 10
        })
      }
    })

    RoundActionCreators.loadRounds(rounds)
  }
}


export default Import
