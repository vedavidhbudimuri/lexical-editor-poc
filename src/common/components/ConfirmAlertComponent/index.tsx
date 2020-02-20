import * as React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line
import 'styled-components/macro'

import {
   YesButton,
   NoButton,
   Container,
   Message,
   MainContainer,
   ButtonsContainer
} from './styledComponents'

interface ConfirmAlertProps extends WithTranslation {
   onConfirm: Function
   onClose: any
   onCancel?: any
   message: string
   yesButtonCSS?: React.CSSProperties
   noButtonCSS?: React.CSSProperties
   MessageTypo?: React.ElementType
}

class ConfirmAlertComponent extends React.Component<ConfirmAlertProps> {
   onClickNo = () => {
      const { onCancel, onClose } = this.props
      if (onCancel) onCancel()
      onClose()
   }

   onClickYes = () => {
      const { onConfirm, onClose } = this.props

      onConfirm()
      onClose()
   }
   render() {
      const { message, t, yesButtonCSS, noButtonCSS, MessageTypo } = this.props
      return (
         <MainContainer>
            <Container>
               {MessageTypo ? (
                  <MessageTypo>{message}</MessageTypo>
               ) : (
                  <Message>{message}</Message>
               )}

               <ButtonsContainer>
                  <NoButton
                     css={noButtonCSS}
                     onClick={this.onClickNo}
                     text={t('common.confirmationAlert.no')}
                  ></NoButton>
                  <YesButton
                     css={yesButtonCSS}
                     onClick={this.onClickYes}
                     text={t('common.confirmationAlert.yes')}
                  ></YesButton>
               </ButtonsContainer>
            </Container>
         </MainContainer>
      )
   }
}

export default withTranslation()(ConfirmAlertComponent)
