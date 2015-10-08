import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link } from 'react-router'

import RoundActionCreators from './actions/RoundActionCreators'

import TimerStore from './stores/TimerStore'

import RoundList from './components/RoundList.react'

import Timer from './routes/Timer.react'
import Import from './routes/Import.react'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = this._getStateFromStores()
  }

  componentDidMount() {
    RoundActionCreators.setActiveRound(0)

    TimerStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    TimerStore.removeChangeListener(this._onChange.bind(this))
  }

  render() {
    let className = ''

    if (this.state.timerStatus == 'ended') {
      className = 'timer-ended'
    }

    return (
      <div id="main" className={className}>
        <div id="navigation">
          <ul>
            <li><Link to="/">Timer</Link></li>
            <li><Link to="/import">Import</Link></li>
          </ul>
        </div>
        <div id="content">
          <RoundList />
          {this.props.children}
        </div>
      </div>
    )
  }

  _getStateFromStores() {
    return {
      timerStatus: TimerStore.getStatus(),
    }
  }

  _onChange() {
    this.setState(this._getStateFromStores())
  }
}


ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Timer} />
      <Route path="import" component={Import} />
    </Route>
  </Router>
), document.getElementById('app'))
