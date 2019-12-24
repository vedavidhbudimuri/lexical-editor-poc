import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DatePicker from '.'

storiesOf('Date Picker', module).add('ui date picker component', () => (
   <DatePicker
      date={new Date(2015, 4, 5)}
      isValid={true}
      onSelectDate={action('date selected')}
   />
))
