import * as React from 'react'
import 'twin.macro'

import {
   ErrorView,
   ErrorMessageContainer,
   containerCSS
} from './styledComponents'

interface ErrorMessageProps {
   errorMessage: string
   errorId?: string
   errorContainerCSS?: React.CSSProperties
}

class ErrorMessage extends React.Component<ErrorMessageProps> {
   static defaultProps = {
      errorMessage: '*required',
      errorContainerCSS: containerCSS
   }

   render(): React.ReactNode {
      const { errorMessage, errorId, errorContainerCSS } = this.props
      return (
         <ErrorView id={errorId} css={errorContainerCSS}>
            <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
         </ErrorView>
      )
   }
}

export default ErrorMessage
