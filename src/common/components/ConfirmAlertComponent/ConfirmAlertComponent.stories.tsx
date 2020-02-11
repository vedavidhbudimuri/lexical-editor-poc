import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ConfirmAlertComponent from '.'

storiesOf('ConfirmAlertComponent', module).add('UI', () => (
   <ConfirmAlertComponent
      onConfirm={action('confirm')}
      onClose={action('close')}
      onCancel={action('cancel')}
      message={'Please Confirm?'}
   />
))
