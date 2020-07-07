import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import IncrementTimer from '.'

storiesOf('IncrementTimer', module).add('IncrementTimer Component', () => (
   <IncrementTimer
      onComplete={action('onComplete')}
      onTimeUpdate={action('onTimeUpdateTriggered')}
      timeInSeconds={10000}
   />
))
