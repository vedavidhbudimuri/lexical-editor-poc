import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import BaseRadioButton from '.'

describe('BaseRadioButton component test cases', () => {
   it('should call on change prop', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
         <BaseRadioButton value={'red'} onChange={onChange} />
      )
      expect(getByTestId('radioButton')).toBeDefined()
   })
})
