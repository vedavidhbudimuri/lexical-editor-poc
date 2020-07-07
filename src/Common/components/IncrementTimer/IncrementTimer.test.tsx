import React from 'react'
import { render } from '@testing-library/react'

import { waitForMilliseconds } from '../../utils/TestUtils'

import IncrementTimer from '.'

describe('IncrementTimer component test cases', () => {
   it('should render Timer and check for onTimeUpdate', async () => {
      const onTimeUpdate = jest.fn()
      const onComplete = jest.fn()
      render(
         <IncrementTimer
            onComplete={onComplete}
            onTimeUpdate={onTimeUpdate}
            timeInSeconds={120}
            maxTime={2}
         />
      )
      await waitForMilliseconds(1000)
      expect(onTimeUpdate).toBeCalledWith(121)
   })

   it('should test for onComplete call back', async () => {
      const onTimeUpdate = jest.fn()
      const onComplete = jest.fn()
      render(
         <IncrementTimer
            onComplete={onComplete}
            onTimeUpdate={onTimeUpdate}
            timeInSeconds={0}
            isFiniteTime={true}
            maxTime={2}
         />
      )
      await waitForMilliseconds(3000)
      expect(onComplete).toBeCalled()
   })
})
