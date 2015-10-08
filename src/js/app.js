import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

import App from './routes/App.react'
import Import from './routes/Import.react'


ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
    <Route path="import" component={Import} />
  </Router>
), document.getElementById('app'))
