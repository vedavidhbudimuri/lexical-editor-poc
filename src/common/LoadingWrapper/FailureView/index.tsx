import React, { Component } from 'react'

import Button from '../../components/Button'

import {
   FailureText,
   ButtonContainer,
   Content,
   Container
} from './styledComponents'

interface IProps {
   onRetry: () => any
   failureText: string
}

class FailureView extends Component<IProps> {
   constructor(props: IProps) {
      super(props)
   }
   //TODO use text from i18n
   render() {
      const { onRetry, failureText } = this.props
      return (
         <Container>
            <Content>
               <FailureText>{failureText}</FailureText>
            </Content>
            <ButtonContainer>
               <Button onClick={onRetry} text='Retry' />
            </ButtonContainer>
         </Container>
      )
   }
}

export default FailureView
