import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import CheckBox from '.'

describe('CheckBox component test cases', () => {
   it('should enabled ', () => {
      const onSelectOption = jest.fn()
      const { getByTestId } = render(
         <CheckBox
            options={[
               { label: 'Male', value: 'Male' },
               { label: 'Female', value: 'Female' },
               { label: 'Others', value: 'Others' }
            ]}
            onSelectOption={onSelectOption}
         />
      )
      const maleCheckBox = getByTestId('Male')

      fireEvent.click(maleCheckBox)
      expect(onSelectOption).toBeCalled()
   })

   it('should disabled ', () => {
      const onSelectOption = jest.fn()
      const { getByTestId } = render(
         <CheckBox
            disabled
            options={[
               { label: 'Male', value: 'Male' },
               { label: 'Female', value: 'Female' },
               { label: 'Others', value: 'Others' }
            ]}
            onSelectOption={onSelectOption}
         />
      )
      const maleCheckBox = getByTestId('Male')

      fireEvent.click(maleCheckBox)
      expect(onSelectOption).toBeCalledTimes(0)
   })
})
