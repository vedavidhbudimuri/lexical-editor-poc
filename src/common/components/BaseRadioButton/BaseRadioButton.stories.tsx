import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import BaseRadioButton from '.'

storiesOf('Base Radio Button', module)
   .add('enabled radio button', () => (
      <BaseRadioButton value={'red '} onSelectOption={action('selected')} />
   ))
   .add('selected disabled radio button', () => (
      <BaseRadioButton
         checked
         disabled
         value={'red'}
         onSelectOption={action('selected')}
      />
   ))
   .add('disabled radio button', () => (
      <BaseRadioButton
         disabled
         value={'red'}
         onSelectOption={action('selected')}
      />
   ))
   .add('checked radio button', () => (
      <BaseRadioButton
         checked
         value={'red'}
         onSelectOption={action('selected')}
      />
   ))
