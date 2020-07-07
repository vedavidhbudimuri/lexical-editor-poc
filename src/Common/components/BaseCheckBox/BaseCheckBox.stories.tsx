import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import BaseCheckBox from '.'

storiesOf('Base Check Boxes', module)
   .add('enabled check box', () => (
      <BaseCheckBox
         value={'RED '}
         label={'red'}
         onChange={action('selected')}
      />
   ))
   .add('disabled check box', () => (
      <BaseCheckBox
         disabled
         value={'RED'}
         label={'red'}
         onChange={action('selected')}
      />
   ))
   .add('checked and disabled check box', () => (
      <BaseCheckBox
         checked
         disabled
         value={'RED'}
         label={'red'}
         onChange={action('selected')}
      />
   ))
   .add('checked check box', () => (
      <BaseCheckBox
         checked
         value={'RED'}
         label={'red'}
         onChange={action('selected')}
      />
   ))
