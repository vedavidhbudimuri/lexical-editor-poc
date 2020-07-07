import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import BaseRadioButton from '.'

describe('BaseRadioButton component test cases', () => {
   it('should call on change prop', () => {
      const onSelectOption = jest.fn()
      const { getByTestId } = render(
         <BaseRadioButton
            option={{ label: 'red', value: 'RED' }}
            onSelectOption={onSelectOption}
         />
      )
      fireEvent.click(getByTestId('radioButton'))
      expect(onSelectOption).toBeCalled()
   })
})
