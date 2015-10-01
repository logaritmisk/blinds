var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var ActionTypes = AppConstants.ActionTypes


export default {

  tickTimer(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.TICK,
      round: id
    })
  },

  resetTimer(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.RESET,
      round: id
    })
  },

  setActive(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.ACTIVE,
      round: id
    })
  }

}
