import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import RadioButton from '.'

describe('RadioButton component test cases', () => {
   it('should enabled ', () => {
      const onSelectOption = jest.fn()
      const { getByTestId } = render(
         <RadioButton
            options={[
               { label: 'Male', value: 'Male' },
               { label: 'Female', value: 'Female' },
               { label: 'Others', value: 'Others' }
            ]}
            onSelectOption={onSelectOption}
         />
      )
      const maleRadioButton = getByTestId('Male')

      fireEvent.click(maleRadioButton)
      expect(onSelectOption).toBeCalled()
   })

   it('should disabled ', () => {
      const onSelectOption = jest.fn()
      const { getByTestId } = render(
         <RadioButton
            disabled
            options={[
               { label: 'Male', value: 'Male' },
               { label: 'Female', value: 'Female' },
               { label: 'Others', value: 'Others' }
            ]}
            onSelectOption={onSelectOption}
         />
      )
      const maleRadioButton = getByTestId('Male')

      fireEvent.click(maleRadioButton)
      expect(onSelectOption).toBeCalledTimes(0)
   })
})
