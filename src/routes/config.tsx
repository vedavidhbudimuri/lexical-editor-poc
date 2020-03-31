import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
   NOT_FOUND_PAGE_PATH,
   NOT_FOUND_PAGE
} from '../constants/NavigationConstants'
import PageNotFound404 from '../common/components/PageNotFound404'

import CounterWithToast from './CounterWithToast'
import Home from './Home'

export const routes = () => (
   <Router>
      <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/counter' component={CounterWithToast} />
         <Route
            path={NOT_FOUND_PAGE_PATH}
            key={NOT_FOUND_PAGE}
            component={PageNotFound404}
         />
      </Switch>
   </Router>
)
