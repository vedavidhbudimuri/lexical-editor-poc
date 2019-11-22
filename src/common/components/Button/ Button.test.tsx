import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button from '.'

describe('Button', () => {
   it('should test if the function passed is called on click', () => {
      const onPressMockFunction = jest.fn()
      const { getByTestId } = render(
         <Button text='Login' onClick={onPressMockFunction} />
      )
      fireEvent.click(getByTestId('button'))
      expect(onPressMockFunction).toHaveBeenCalledTimes(1)
   })
})
