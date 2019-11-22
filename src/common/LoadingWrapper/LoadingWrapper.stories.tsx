import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'

import LoadingWrapper from '.'

function ChildComponent() {
   return <span>hello</span>
}

storiesOf('component Guide', module)
   .add('LoadingWrapper Component when fetching', () => (
      <LoadingWrapper
         onRetry={action('clicked retry button')}
         failureText='connection failed'
         apiStatus={API_FETCHING}
      >
         {ChildComponent()}
      </LoadingWrapper>
   ))
   .add('LoadingWrapper Component when success', () => (
      <LoadingWrapper
         onRetry={() => {
            actions('clicked retry button')
         }}
         failureText='connection failed'
         apiStatus={API_SUCCESS}
      >
         {ChildComponent()}
      </LoadingWrapper>
   ))
   .add('LoadingWrapper Component when failed', () => (
      <LoadingWrapper
         onRetry={() => {
            actions('clicked retry button')
         }}
         failureText='connection failed'
         apiStatus={API_FAILED}
      >
         {ChildComponent()}
      </LoadingWrapper>
   ))
