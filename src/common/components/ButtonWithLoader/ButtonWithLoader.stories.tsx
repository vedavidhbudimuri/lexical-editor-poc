import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { API_FETCHING } from '@ib/api-constants'
import { I18nextProvider } from 'react-i18next'

import i18n from '../../../i18n'

import CorrectIcon from '../../../icons/CorrectIcon'

import ButtonWithLoader from '.'

const Icon = () => (
   <span>
      <CorrectIcon />
   </span>
)

storiesOf('Component Guide', module)
   .addDecorator(story => (
      <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>
   ))
   .add('ButtonWithLoader Component', () => (
      <ButtonWithLoader text='Click' onClick={action('clicked')} />
   ))
   .add('ButtonWithLoader Component with apiStatus', () => (
      <ButtonWithLoader
         text='Click'
         onClick={action('clicked')}
         apiStatus={API_FETCHING}
      />
   ))
   .add('ButtonWithLoader Component with rightIcon', () => (
      <ButtonWithLoader
         text='Click'
         onClick={action('clicked')}
         renderRightIcon={Icon}
      />
   ))
   .add('ButtonWithLoader Component with disabled', () => (
      <ButtonWithLoader
         text='Click'
         onClick={action('clicked')}
         disabled={true}
      />
   ))
