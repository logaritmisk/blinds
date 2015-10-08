import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'


export default {

  loadRounds(rounds) {
    AppDispatcher.dispatch({
      type: AppConstants.ROUND_LOAD_ROUNDS,
      rounds: rounds
    })
  },

  setActiveRound(round) {
    AppDispatcher.dispatch({
      type: AppConstants.ROUND_SET_ACTIVE,
      round: round
    })
  }

}
