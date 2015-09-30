var RoundItem = require('./RoundItem.react')

var React = require('react')


class RoundController extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var round = this.props.round

    return (
      <RoundItem
        smallBlind={round.smallBlind}
        bigBlind={round.bigBlind}
        roundLength={round.roundLength}
        />
    )
  }
}

RoundController.propTypes = {
  round: React.PropTypes.any.isRequired
}


export default RoundController
