import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Colors from '../../../themes/Colors'

import BaseModalContainer from '.'

const Children = styled.div`
   width: 300px;
   height: 300px;
   background-color: ${Colors.white};
`

const Container = styled.div`
   width: 100%;
   height: 100vh;
   background-color: ${Colors.pinkishOrange};
`

storiesOf('BaseModalContainer', module).add('UI', () => (
   <>
      <BaseModalContainer isOpen={true}>
         <Children />
      </BaseModalContainer>
      <Container></Container>
   </>
))
