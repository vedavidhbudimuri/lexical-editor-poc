import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import colors from '../../themes/Colors'

import Card from '.'

const ProgramCard = styled(Card)`
   height: 160px;
   width: 200px;
   background-color: ${colors.primaryColor};
`

storiesOf('Component Guide', module)
   .add('Card Component', () => <Card onClick={action('clicked card')} />)
   .add('ProgramCard Component', () => (
      <ProgramCard onClick={action('clicked ProgramCard')}>
         <span>hello</span>
      </ProgramCard>
   ))
