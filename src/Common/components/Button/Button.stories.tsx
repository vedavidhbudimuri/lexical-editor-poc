import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { I18nextProvider } from 'react-i18next'

import { Typo12BlackRoboto } from '../../styleGuide/Typos'
import i18n from '../../i18n'

import Button from '.'

storiesOf('Component Guide', module)
   .addDecorator(story => (
      <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>
   ))
   .add('simple Button Component', () => (
      <Button
         text='Click'
         onClick={action('clicked')}
         textComponent={Typo12BlackRoboto}
      />
   ))
