import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DecrementTimer from '.'

storiesOf('DecrementTimer', module).add('DecrementTimer Component', () => (
   <DecrementTimer
      onComplete={action('onComplete')}
      onTimeUpdate={action('onTimeUpdateTriggered')}
      timeInSeconds={10}
   />
))
