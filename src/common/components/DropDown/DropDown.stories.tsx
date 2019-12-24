import React from 'react'
import { storiesOf } from '@storybook/react'

import DropDown from '.'

storiesOf('DropDown', module).add('UI dropdown', () => (
   <DropDown
      placeholder={'Select your favourite ice cream flavour...'}
      options={[
         { value: 'chocolate', label: 'Chocolate' },
         { value: 'strawberry', label: 'Strawberry' },
         { value: 'vanilla', label: 'Vanilla' }
      ]}
   />
))
