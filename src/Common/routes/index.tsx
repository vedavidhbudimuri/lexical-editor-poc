import React, { Component } from 'react'
import { routes } from './config'

class Routes extends Component {
   render(): React.ReactElement {
      return <div>{routes()}</div>
   }
}
export default Routes
