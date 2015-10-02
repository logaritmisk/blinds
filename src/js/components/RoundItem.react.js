var RoundActionCreators = require('../actions/RoundActionCreators')
var RoundStore = require('../stores/RoundStore')

var React = require('react')

var numeral = require('numeral')


class RoundItem extends React.Component {
  constructor(props) {
    super(props)
  }

  renderTimer() {
    var secondsRemaining = this.props.round.secondsRemaining

    var minutes = Math.trunc(secondsRemaining / 60)
    var seconds = secondsRemaining % 60

    return (
      <div className='timer'>
        {minutes < 10 ? '0' + minutes : minutes}<span className='divider'>:</span>{seconds < 10 ? '0' + seconds : seconds}
      </div>
    )
  }

  renderBlinds() {
    return (
      <div className='blinds'>
        <span className='small'>{numeral(this.props.round.smallBlind).format('0,0')}</span>
        <span className='divider'>/</span>
        <span className='big'>{numeral(this.props.round.bigBlind).format('0,0')}</span>
      </div>
    )
  }

  render() {
    return (
      <div className='round' onClick={this._onClick.bind(this)}>
        {this.renderTimer()}
        {this.renderBlinds()}
      </div>
    )
  }

  _onClick() {
    RoundActionCreators.setActive(this.props.round.id)
  }
}

RoundItem.propTypes = {
  round: React.PropTypes.object.isRequired
}


export default RoundItem
