import React from 'react'
import { render } from '@testing-library/react'

import DropDown from './'

describe('DropDown component', () => {
   it('should render the dropdown ui component', () => {
      const { getByText } = render(
         <DropDown
            placeholder={'Select your favourite ice cream flavour...'}
            options={[
               { value: 'chocolate', label: 'Chocolate' },
               { value: 'strawberry', label: 'Strawberry' },
               { value: 'vanilla', label: 'Vanilla' }
            ]}
         />
      )
      const dropDown = getByText('Select your favourite ice cream flavour...')

      expect(dropDown).toBeDefined()
   })
})
