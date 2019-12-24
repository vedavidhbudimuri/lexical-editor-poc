import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import RadioButton from '.'

const options = [
   { label: 'Male', value: 'Male' },
   { label: 'Female', value: 'Female' },
   { label: 'Others', value: 'Others' }
]

describe('RadioButton component test cases', () => {
   it('should enabled ', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
         <RadioButton options={options} onChange={onChange} />
      )
      const maleRadioButton = getByTestId('Male')

      fireEvent.click(maleRadioButton)
      expect(onChange).toBeCalled()
   })

   it('should disabled ', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
         <RadioButton disabled options={options} onChange={onChange} />
      )
      const maleRadioButton = getByTestId('Male')

      fireEvent.click(maleRadioButton)
      expect(onChange).toBeCalledTimes(0)
   })
})
