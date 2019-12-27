import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RadioButton from '.'

storiesOf('RadioButton', module)
   .add('buttons enabled', () => (
      <RadioButton
         options={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Others', value: 'Others' }
         ]}
         selectedValue={'Female'}
         onSelectOption={action('selected')}
      />
   ))
   .add('buttons disabled', () => (
      <RadioButton
         disabled={true}
         options={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Others', value: 'Others' }
         ]}
         selectedValue={'Male'}
         onSelectOption={action('selected')}
      />
   ))
