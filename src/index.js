import React from 'react'
import {render} from 'react-dom'
import Home from './components/Home'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

render(
  <div className="container">
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
  </Router>
  </div>, document.getElementById('root')
)
