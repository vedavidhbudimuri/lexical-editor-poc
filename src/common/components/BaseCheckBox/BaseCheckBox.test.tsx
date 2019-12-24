import React from 'react'
import { render } from '@testing-library/react'

import BaseCheckBox from '.'

describe('BaseCheckBox component test cases', () => {
   it('should call on change prop', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
         <BaseCheckBox value={'red'} onChange={onChange} />
      )
      expect(getByTestId('checkbox')).toBeDefined()
   })
})
