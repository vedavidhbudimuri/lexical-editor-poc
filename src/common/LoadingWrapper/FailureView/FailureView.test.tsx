import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'

import i18n from '../../../i18n'

import FailureView from '.'

describe('Test cases of FailureView Component', () => {
   it('should call onRetry callback when clicks on retry button', () => {
      const onRetry = jest.fn()
      const { getByText } = render(
         <I18nextProvider i18n={i18n}>
            <FailureView onRetry={onRetry} failureText='Connection failed' />
         </I18nextProvider>
      )
      const retry = getByText('Retry')
      fireEvent.click(retry)
      expect(onRetry).toBeCalled()
   })
})
