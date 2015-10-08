import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'


export default {

  setActiveRound(round) {
    AppDispatcher.dispatch({
      type: AppConstants.ROUND_SET_ACTIVE,
      round: round
    })
  }

}
