import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import DatePicker from './'

describe('DatePicker component test cases', () => {
   it('should call callback on select date', () => {
      const selectDate = jest.fn()
      const { getByPlaceholderText } = render(
         <DatePicker
            onSelectDate={selectDate}
            date={new Date(2019, 3, 3)}
            isValid={true}
         />
      )
      const datePicker = getByPlaceholderText('en:common.datePicker.selectDate')

      fireEvent.change(datePicker, { target: { value: '2015-05-05' } })
      expect(selectDate).toHaveBeenCalled()
   })
})
