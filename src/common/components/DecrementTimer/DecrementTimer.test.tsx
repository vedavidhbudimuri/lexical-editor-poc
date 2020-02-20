import React from 'react'
import { render } from '@testing-library/react'

import { waitForMilliseconds } from '../../../utils/TestUtils'

import DecrementTimer from '.'

describe('DecrementTimer component test cases', () => {
   const onTimeUpdate = jest.fn()
   const onComplete = jest.fn()
   it('should render Timer and check for Ontime Update', async () => {
      render(
         <DecrementTimer
            onComplete={onComplete}
            onTimeUpdate={onTimeUpdate}
            timeInSeconds={100}
         />
      )
      await waitForMilliseconds(1000)
      expect(onTimeUpdate).toBeCalledWith(99)
   })

   it('should check for onComplete call back', async () => {
      render(
         <DecrementTimer
            onComplete={onComplete}
            onTimeUpdate={onTimeUpdate}
            timeInSeconds={2}
         />
      )
      await waitForMilliseconds(2050)
      expect(onComplete).toBeCalled()
   })
})
