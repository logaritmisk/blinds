var React = require('react')


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isRunning: false,
      secondsRemaining: this.props.roundLength
    }
  }

  tick() {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 })
  }

  formatTime() {
    var secondsRemaining = this.state.secondsRemaining

    var minutes = Math.trunc(secondsRemaining / 60)
    var seconds = secondsRemaining % 60

    return (
      <div>
        {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
      </div>
    )
  }

  formatControllers() {
    var controllers = []

    controllers.push(<span key='toggle' onClick={this.toggleTimer.bind(this)}>{this.state.isRunning ? 'Stop' : 'Start'}</span>)

    if (!this.state.isRunning && this.state.secondsRemaining != this.props.roundLength) {
      controllers.push(<span key='reset' onClick={this.resetTimer.bind(this)}>Reset</span>)
    }

    return controllers
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    var time = this.formatTime()
    var controllers = this.formatControllers()

    return (
      <div>
        {time}
        {controllers}
      </div>
    )
  }

  toggleTimer() {
    if (this.state.isRunning) {
      clearInterval(this.interval)
    } else {
      this.interval = setInterval(this.tick.bind(this), 1000)
    }

    this.setState({ isRunning: !this.state.isRunning })
  }

  resetTimer() {
    this.setState({ secondsRemaining: this.props.roundLength })
  }
}

App.defaultProps = { roundLength: 60 * 20 }


React.render(
  <App />,
  document.getElementById('app')
)
