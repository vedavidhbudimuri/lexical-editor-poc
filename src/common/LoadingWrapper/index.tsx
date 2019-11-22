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

interface IProps {
   renderLoadingView: () => any
   renderFailureView: (onRetry: () => any, failureText: string) => any
   apiStatus: APIStatus
   onRetry: () => any
   failureText: string
}

class LoadingWrapper extends Component<IProps> {
   static defaultProps = {
      onRetry: () => {
         return 0
      },
      renderLoadingView: () => {
         return <LoadingView />
      },
      renderFailureView: (onRetry, failureText) => {
         return <FailureView onRetry={onRetry} failureText={failureText} />
      }
   }
   constructor(props: IProps) {
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
