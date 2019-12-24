import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import RadioButton from '.'

const options = [
   { label: 'Male', value: 'Male' },
   { label: 'Female', value: 'Female' },
   { label: 'Others', value: 'Others' }
]

storiesOf('RadioButton', module)
   .add('buttons enabled', () => (
      <RadioButton
         options={options}
         selectedValue={'Female'}
         onChange={action('selected')}
      />
   ))
   .add('buttons disabled', () => (
      <RadioButton
         disabled={true}
         options={options}
         selectedValue={'Male'}
         onChange={action('selected')}
      />
   ))
