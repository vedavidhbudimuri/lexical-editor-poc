import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import CounterWithToast from './index'

describe('Counter test', () => {
   it('should test if Counter is rendered or not', () => {
      const counter = render(
         <Router>
            <CounterWithToast />
         </Router>
      )

      expect(counter).toBeDefined()
   })
})
