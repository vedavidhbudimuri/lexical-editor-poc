import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import BaseCheckBox from '.'

describe('BaseCheckBox component test cases', () => {
   it('should call on change prop', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
         <BaseCheckBox value={'red'} onChange={onChange} />
      )

      fireEvent.click(getByTestId('checkbox'))
      expect(onChange).toBeCalled()
   })
})
