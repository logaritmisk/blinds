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
    var finished = []
    var active = []
    var left = []

    Object.keys(this.state.rounds).forEach(key => {
      var round = this.state.rounds[key]

      if (round.id == this.state.active) {
        active.push(<RoundController key={key} round={round} />)
      } else if (active.length > 0) {
        left.push(<RoundItem key={key} round={round} />)
      } else {
        finished.push(<RoundItem key={key} round={round} />)
      }
    })

    return (
      <div className='rounds'>
        <div className='finished'>
          {finished}
        </div>
        <div className='active'>
          {active}
        </div>
        <div className='left'>
          {left}
        </div>
      </div>
    )
  }

  _onChange() {
    this.setState(getStateFromStores())
  }
}


export default RoundList
