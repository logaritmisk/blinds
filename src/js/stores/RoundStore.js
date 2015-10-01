var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var EventEmitter = require('events').EventEmitter

var ActionTypes = AppConstants.ActionTypes


var CHANGE_EVENT = 'change'


var _rounds = [
  {
    id: 0,
    smallBlind: 25,
    bigBlind: 50,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  },
  {
    id: 1,
    smallBlind: 50,
    bigBlind: 75,
    roundLength: 60 * 20,
    secondsRemaining: 60 * 20
  }
]

var _active = 0


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

  getRound(id) {
    return _rounds[id]
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
