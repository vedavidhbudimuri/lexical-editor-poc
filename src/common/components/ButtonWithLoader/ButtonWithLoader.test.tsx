import React from 'react'
import { API_INITIAL } from '@ib/api-constants'
import { render, fireEvent } from '@testing-library/react'

import ButtonWithLoader from '.'

describe('ButtonWithLoader component test cases', () => {
   it('should text onclick the button ', () => {
      const onPressMockFunction = jest.fn()
      const { getByText } = render(
         <ButtonWithLoader
            text='Login'
            apiStatus={API_INITIAL}
            onClick={onPressMockFunction}
         />
      )
      fireEvent.click(getByText('Login'))
      expect(onPressMockFunction).toBeCalled()
   })
})
