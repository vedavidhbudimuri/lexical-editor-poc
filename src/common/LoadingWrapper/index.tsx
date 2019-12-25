import React, { Component } from 'react'
import {
   APIStatus,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
} from '@ib/api-constants'

import LoadingView from './LoadingView'
import FailureView from './FailureView'
import { Container } from './styledComponents'

interface Props {
   renderLoadingView: () => any
   renderFailureView: (onRetry: () => any, failureText: string) => any
   apiStatus: APIStatus
   onRetry: () => any
   failureText: string
}

class LoadingWrapper extends Component<Props> {
   static defaultProps = {
      onRetry: () => 0,
      renderLoadingView: () => <LoadingView />,
      renderFailureView: (onRetry, failureText) => (
         <FailureView onRetry={onRetry} failureText={failureText} />
      )
   }
   constructor(props: Props) {
      super(props)
   }

   renderContent = () => {
      const {
         renderFailureView,
         renderLoadingView,
         apiStatus,
         failureText,
         onRetry,
         children
      } = this.props

      switch (apiStatus) {
         case API_FETCHING:
            return <Container>{renderLoadingView()}</Container>
         case API_SUCCESS:
            return children
         case API_FAILED:
            return (
               <Container>{renderFailureView(onRetry, failureText)}</Container>
            )
         default:
            return <Container>{renderLoadingView()}</Container>
      }
   }

   render() {
      return this.renderContent()
   }
}

export default LoadingWrapper
