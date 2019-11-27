import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line

import Button from '../../components/Button'

import {
   FailureText,
   ButtonContainer,
   Content,
   Container
} from './styledComponents'

interface FailureViewProps extends WithTranslation {
   onRetry: () => any
   failureText: string
}

class FailureView extends Component<FailureViewProps> {
   render() {
      const { onRetry, failureText, t } = this.props
      return (
         <Container>
            <Content>
               <FailureText>{failureText}</FailureText>
            </Content>
            <ButtonContainer>
               <Button onClick={onRetry} text={t('common.failureView.retry')} />
            </ButtonContainer>
         </Container>
      )
   }
}

export default withTranslation()(FailureView)
