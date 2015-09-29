var React = require('react')


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { secondsRemaining: 60 * 20 }
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

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        var time = this.formatTime()

        return (
            <div>{time}</div>
        )
    }
}


React.render(
    <App />,
    document.getElementById('app')
)
