var RoundStore = require('../stores/RoundStore')

var RoundItem = require('./RoundItem.react')
var RoundController = require('./RoundController.react')

var React = require('react')


class RoundList extends React.Component {
  getStateFromStores() {
    return {
      rounds: RoundStore.getRounds(),
      active: RoundStore.getActive()
    }
  }

  constructor(props) {
    super(props)

    this.state = this.getStateFromStores()
  }

  componentDidMount() {
    RoundStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    RoundStore.removeChangeListener(this._onChange)
  }

  render() {
    var rounds = this.state.rounds.map((round, i) => {
      if (i == this.state.active) {
        return (
          <RoundController
            key={i}
            round={round}
            />
        )
      } else {
        return (
          <RoundItem
            key={i}
            smallBlind={round.smallBlind}
            bigBlind={round.bigBlind}
            roundLength={round.roundLength}
            />
        )
      }
    })

    return (
      <div>
        {rounds}
      </div>
    )
  }

  _onChange() {
    this.setState(this.getStateFromStores())
  }
}


export default RoundList
