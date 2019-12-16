import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import DropDown from './'

describe('DropDown component', () => {
   it('should render the dropdown ui component', () => {
      const { getByText } = render(
         <DropDown
            placeholder={'Select Fruit...'}
            options={[
               { value: 'chocolate', label: 'Chocolate' },
               { value: 'strawberry', label: 'Strawberry' },
               { value: 'vanilla', label: 'Vanilla' }
            ]}
         />
      )
      const dropDown = getByText('Select Fruit...')

      expect(dropDown).toBeDefined()
   })
})
