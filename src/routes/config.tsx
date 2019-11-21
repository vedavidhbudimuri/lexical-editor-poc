import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CounterWithToast from '../components/CounterWithToast'
import Home from '../components/Home'

export const routes = () => {
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={CounterWithToast} />
         </Switch>
      </Router>
   )
}
