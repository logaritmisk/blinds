var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var EventEmitter = require('events').EventEmitter

var ActionTypes = AppConstants.ActionTypes


var CHANGE_EVENT = 'change'


var _rounds = {
  1: {
    id: 1,
    smallBlind: 25,
    bigBlind: 50,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  2: {
    id: 2,
    smallBlind: 50,
    bigBlind: 100,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  3: {
    id: 3,
    smallBlind: 75,
    bigBlind: 150,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  4: {
    id: 4,
    smallBlind: 100,
    bigBlind: 200,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  5: {
    id: 5,
    smallBlind: 150,
    bigBlind: 300,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  6: {
    id: 6,
    smallBlind: 200,
    bigBlind: 400,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  7: {
    id: 7,
    smallBlind: 300,
    bigBlind: 600,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  8: {
    id: 8,
    smallBlind: 500,
    bigBlind: 1000,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  9: {
    id: 9,
    smallBlind: 800,
    bigBlind: 1600,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  10: {
    id: 10,
    smallBlind: 1500,
    bigBlind: 3000,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  11: {
    id: 11,
    smallBlind: 2000,
    bigBlind: 4000,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  12: {
    id: 12,
    smallBlind: 3000,
    bigBlind: 6000,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  13: {
    id: 13,
    smallBlind: 5000,
    bigBlind: 10000,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  14: {
    id: 14,
    smallBlind: 7000,
    bigBlind: 14000,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  15: {
    id: 15,
    smallBlind: 10000,
    bigBlind: 20000,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  16: {
    id: 16,
    smallBlind: 15000,
    bigBlind: 30000,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  }
}

var _active = 1


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

  getRounds() {
    return _rounds
  }

  getRound(round) {
    return _rounds[round]
  }

  getActive() {
    return _active
  }
}


var _instance = new RoundStore()


RoundStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.type) {
    case ActionTypes.TICK:
    _rounds[action.round].secondsRemaining -= 1
    _instance.emitChange()
    break;

    case ActionTypes.RESET:
    _rounds[action.round].secondsRemaining = _rounds[action.round].roundLength
    _instance.emitChange()
    break;

    case ActionTypes.ACTIVE:
    _active = action.round
    _instance.emitChange()
    break;

    default:
    // do nothing
  }
})


export default _instance
