import React from 'react'
import { storiesOf } from '@storybook/react'

import ErrorMessage from '.'

storiesOf('ErrorMessage Component', module)
   .add('ErrorMessage Component with errorMessage', () => (
      <ErrorMessage errorMessage='Not a valid name' />
   ))
   .add('ErrorMessage Component without errorMessage', () => <ErrorMessage />)
