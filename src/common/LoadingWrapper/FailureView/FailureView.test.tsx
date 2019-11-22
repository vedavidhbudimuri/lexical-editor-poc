import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import FailureView from '.'

describe('Test cases of FailureView Component', () => {
   test('callback while clicking retry button', () => {
      const onRetry = jest.fn()
      const { getByTestId } = render(
         <FailureView onRetry={onRetry} failureText='connection failed' />
      )
      const retry = getByTestId('retry')
      fireEvent.click(retry)
      expect(onRetry).toBeCalled()
   })
})
