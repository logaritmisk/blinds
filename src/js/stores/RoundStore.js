var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var EventEmitter = require('events').EventEmitter

var ActionTypes = AppConstants.ActionTypes


var CHANGE_EVENT = 'change'


var _rounds = [
  {
    smallBlind: 25,
    bigBlind: 50,
    roundLength: 60 * 20
  },
  {
    smallBlind: 50,
    bigBlind: 75,
    roundLength: 60 * 20
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

  getActive() {
    return _active
  }
}


RoundStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.type) {
    case ActionTypes.CREATE_ROUND:
        RoundStore.emitChange()
        break;

    default:
        // do nothing
    }
})


export default new RoundStore()
