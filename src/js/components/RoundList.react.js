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
    RoundStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    RoundStore.removeChangeListener(this._onChange)
  }

  render() {
    var rounds = this.state.rounds.map((round, i) => {
      if (i == this.state.active) {
        return <RoundController key={i} round={i} />
      } else {
        return <RoundItem key={i} round={i} />
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
