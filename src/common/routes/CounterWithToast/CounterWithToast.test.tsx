import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import stores from '../../stores'

import CounterWithToast from './index'

describe('Counter test', () => {
   it('should test if Counter is rendered or not', () => {
      const counter = render(
         <Router>
            <CounterWithToast counterStore={stores.counterStore} />
         </Router>
      )
      expect(counter).toBeDefined()
   })
})
