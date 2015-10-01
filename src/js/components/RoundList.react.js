var RoundStore = require('../stores/RoundStore')

var RoundItem = require('./RoundItem.react')
var RoundController = require('./RoundController.react')

var React = require('react')


function getStateFromStores() {
  return {
    rounds: RoundStore.getRounds(),
    active: RoundStore.getActive()
  }
}


class RoundList extends React.Component {
  constructor(props) {
    super(props)

    this.state = getStateFromStores()
  }

  componentDidMount() {
    RoundStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    RoundStore.removeChangeListener(this._onChange.bind(this))
  }

  render() {
    var rounds = this.state.rounds.map((round, i) => {
      if (i == this.state.active) {
        return <RoundController key={i} round={round} />
      } else {
        return <RoundItem key={i} round={round} />
      }
    })

    return (
      <div>
        {rounds}
      </div>
    )
  }

  _onChange() {
    this.setState(getStateFromStores())
  }
}


export default RoundList
