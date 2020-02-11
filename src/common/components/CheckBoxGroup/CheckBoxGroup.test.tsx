import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import CheckboxGroup from '.'

const options = [
   { label: 'Male', value: 'MALE' },
   { label: 'Female', value: 'FEMALE' },
   { label: 'Others', value: 'OTHERS' }
]

describe('Checkboxes component test cases', () => {
   it('should enabled ', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
         <CheckboxGroup options={options} onChange={onChange} />
      )
      const maleCheckBox = getByTestId('Male')

      fireEvent.click(maleCheckBox)
      expect(onChange).toBeCalled()
   })

   it('should disabled ', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
         <CheckboxGroup disabled options={options} onChange={onChange} />
      )
      const maleCheckBox = getByTestId('Male')

      fireEvent.click(maleCheckBox)
      expect(onChange).toBeCalledTimes(0)
   })
})
