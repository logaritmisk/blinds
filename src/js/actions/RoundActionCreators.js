var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var ActionTypes = AppConstants.ActionTypes


export default {

  tick(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.TICK,
      round: id
    })
  },

  reset(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.RESET,
      round: id
    })
  }

}
