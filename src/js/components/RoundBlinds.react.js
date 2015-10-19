import React, { Component } from 'react'

import numeral from 'numeral'


class RoundBlinds extends Component {
  render() {
    return (
      <div className="round-blinds">
        {numeral(this.props.smallBlind).format('0,0')}<span className="separator">/</span>{numeral(this.props.bigBlind).format('0,0')}
      </div>
    )
  }
}

RoundBlinds.propTypes = {
  smallBlind: React.PropTypes.number.isRequired,
  bigBlind: React.PropTypes.number.isRequired
}


export default RoundBlinds
