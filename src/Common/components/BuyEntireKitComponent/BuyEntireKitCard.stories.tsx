import React from 'react'
import { storiesOf } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'

import i18n from '../../i18n'

import BuyEntireKitCard from '.'

storiesOf('IBC Purchace kit', module)
   .addDecorator(story => (
      <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>
   ))
   .add('Buy Entire Kit Card', () => <BuyEntireKitCard />)
