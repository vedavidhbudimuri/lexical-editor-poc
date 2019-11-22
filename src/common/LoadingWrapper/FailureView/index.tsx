import React, { Component } from 'react'

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

export default class FailureView extends Component<IProps> {
   constructor(props: IProps) {
      super(props)
   }
   //TODO replce button with common component button
   render() {
      const { onRetry, failureText } = this.props
      return (
         <Container>
            <Content>
               <FailureText>{failureText}</FailureText>
            </Content>
            <ButtonContainer>
               <button
                  onClick={onRetry}
                  data-testid='retry'
                  style={{ backgroundColor: '#2196f3' }}
               >
                  Retry
               </button>
            </ButtonContainer>
         </Container>
      )
   }
}
