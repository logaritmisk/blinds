import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'

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
    let className = 'timer-' + this.state.timerStatus

    return (
      <div id="main" className={className}>
        <div id="navigation">
          <ul>
            <li><IndexLink to="/" className="button">Timer</IndexLink></li>
            <li><Link to="/import" className="button">Import</Link></li>
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
