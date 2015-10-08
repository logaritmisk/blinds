import { EventEmitter } from 'events'

import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'


const CHANGE_EVENT = 'change'


let _data = {
  active: 0,
  rounds: [
    {
      smallBlind: 25,
      bigBlind: 50,
      length: 60 * 20,
    },
    {
      smallBlind: 50,
      bigBlind: 100,
      length: 60 * 20,
    },
    {
      smallBlind: 75,
      bigBlind: 150,
      length: 60 * 20,
    },
    {
      smallBlind: 100,
      bigBlind: 200,
      length: 60 * 20,
    },
    {
      smallBlind: 150,
      bigBlind: 300,
      length: 60 * 20,
    },
    {
      smallBlind: 200,
      bigBlind: 400,
      length: 60 * 20,
    },
    {
      smallBlind: 300,
      bigBlind: 600,
      length: 60 * 20,
    },
    {
      smallBlind: 500,
      bigBlind: 1000,
      length: 60 * 20,
    },
    {
      smallBlind: 800,
      bigBlind: 1600,
      length: 60 * 20,
    },
    {
      smallBlind: 1500,
      bigBlind: 3000,
      length: 60 * 20,
    },
    {
      smallBlind: 2000,
      bigBlind: 4000,
      length: 60 * 20,
    },
    {
      smallBlind: 3000,
      bigBlind: 6000,
      length: 60 * 20,
    },
    {
      smallBlind: 5000,
      bigBlind: 10000,
      length: 60 * 20,
    },
    {
      smallBlind: 7000,
      bigBlind: 14000,
      length: 60 * 20,
    },
    {
      smallBlind: 10000,
      bigBlind: 20000,
      length: 60 * 20,
    },
    {
      smallBlind: 15000,
      bigBlind: 30000,
      length: 60 * 20,
    }
  ]
}


class RoundStore extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getActive() {
    return _data.active
  }

  getRounds() {
    return _data.rounds
  }

  getRound(round) {
    let rounds = this.getRounds()

    if (rounds[round] === undefined) {
      return {}
    }

    return rounds[round]
  }
}


let _instance = new RoundStore()


_instance.dispatchToken = AppDispatcher.register(action => {
  switch(action.type) {
    case AppConstants.ROUND_SET_ACTIVE:
      _data.active = action.round
      _instance.emitChange()
      break

    default:
      break
  }
})


export default _instance
