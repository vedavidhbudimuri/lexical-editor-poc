import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import BaseRadioButton from '.'

storiesOf('Base Radio Button', module)
   .add('enabled radio button', () => (
      <BaseRadioButton
         option={{ label: 'red', value: 'RED' }}
         onSelectOption={action('selected')}
      />
   ))
   .add('disabled radio button', () => (
      <BaseRadioButton
         disabled
         option={{ label: 'red', value: 'RED' }}
         onSelectOption={action('selected')}
      />
   ))
   .add('checked radio button', () => (
      <BaseRadioButton
         checked
         option={{ label: 'red', value: 'RED' }}
         onSelectOption={action('selected')}
      />
   ))
