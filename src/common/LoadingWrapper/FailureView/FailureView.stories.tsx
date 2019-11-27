import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import FailureView from '.'

storiesOf('component Guide', module).add('FailureView Component', () => (
   <FailureView
      onRetry={action('clicked retry button')}
      failureText='Connection failed!!'
   />
))
