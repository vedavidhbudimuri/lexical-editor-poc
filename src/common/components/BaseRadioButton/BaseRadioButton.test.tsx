import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import BaseRadioButton from '.'

describe('BaseRadioButton component test cases', () => {
   it('should call on change prop', () => {
      const onSelectOption = jest.fn()
      const { getByTestId } = render(
         <BaseRadioButton value={'red'} onSelectOption={onSelectOption} />
      )
      expect(getByTestId('radioButton')).toBeDefined()
   })
})
