import React from 'react'
import { storiesOf } from '@storybook/react'
import { API_INITIAL, API_FETCHING } from '@ib/api-constants'
import { action } from '@storybook/addon-actions'

import ButtonWithLoader from '.'

storiesOf('Component Guide', module)
   .add('ButtonWithLoader Component -loading state', () => (
      <ButtonWithLoader
         text='click'
         apiStatus={API_FETCHING}
         onClick={action('clicked')}
      />
   ))
   .add('ButtonWithLoader Component -initial state', () => (
      <ButtonWithLoader
         text='Click'
         onClick={action('clicked')}
         apiStatus={API_INITIAL}
      />
   ))
