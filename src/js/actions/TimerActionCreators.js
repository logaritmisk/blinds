import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'


export default {

  initTimer(length) {
    AppDispatcher.dispatch({
      type: AppConstants.TIMER_INIT,
      length: length
    })
  },

  startTimer() {
    AppDispatcher.dispatch({
      type: AppConstants.TIMER_START
    })
  },

  pauseTimer() {
    AppDispatcher.dispatch({
      type: AppConstants.TIMER_PAUSE
    })
  },

  resetTimer() {
    AppDispatcher.dispatch({
      type: AppConstants.TIMER_RESET
    })
  },

  tickTimer() {
    AppDispatcher.dispatch({
      type: AppConstants.TIMER_TICK
    })
  }

}
