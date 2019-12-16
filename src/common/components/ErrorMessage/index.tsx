import React, { Component } from 'react'

import { ErrorView, ErrorText } from './styledComponents'

interface ErrorMessageProps {
   errorMessage?: string
}

class ErrorMessage extends Component<ErrorMessageProps> {
   renderError = () => {
      const { errorMessage } = this.props
      if (errorMessage) {
         return (
            <ErrorView>
               <ErrorText as='div'>{`* ${errorMessage}`}</ErrorText>
            </ErrorView>
         )
      }
      return null
   }
   render() {
      return this.renderError()
   }
}

export default ErrorMessage
