import React from 'react'
import { render } from '@testing-library/react'

import stores from '../../stores'

import CounterWithToast from './index'

describe('Counter test', () => {
   it('should test if Counter is rendered or not', () => {
      const counter = render(
         <CounterWithToast counterStore={stores.counterStore} />
      )
      expect(counter).toBeDefined()
   })
})
