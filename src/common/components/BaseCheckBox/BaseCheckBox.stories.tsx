import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import BaseCheckBox from '.'

storiesOf('Base Check Boxes', module)
   .add('enabled check box', () => (
      <BaseCheckBox value={'red '} onSelectOption={action('selected')} />
   ))
   .add('disabled check box', () => (
      <BaseCheckBox
         disabled
         value={'red'}
         onSelectOption={action('selected')}
      />
   ))
   .add('checked and disabled check box', () => (
      <BaseCheckBox
         checked
         disabled
         value={'red'}
         onSelectOption={action('selected')}
      />
   ))
   .add('checked check box', () => (
      <BaseCheckBox checked value={'red'} onSelectOption={action('selected')} />
   ))
