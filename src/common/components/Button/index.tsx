import * as React from 'react'
import { APIStatus, API_INITIAL, API_FETCHING } from '@ib/api-constants'

import Colors from '../../../themes/Colors'

import Loader from '../Loader'

import { StyledButton, StyledText } from './styledComponents'

interface ButtonProps {
   text: string
   onClick: () => any
   apiStatus: APIStatus
   className: string
   textStyle: object
   disabled: boolean
   renderLoader: () => any
}

class Button extends React.Component<ButtonProps> {
   static defaultProps = {
      apiStatus: API_INITIAL,
      disabled: false,
      renderLoader: () => (
         <Loader color={Colors.white} height={25} width={25} />
      ),
      textStyle: { fontSize: 20 },
      className: ''
   }

   constructor(props: ButtonProps) {
      super(props)
   }

   isFetching = () => {
      const { apiStatus } = this.props
      return apiStatus === API_FETCHING
   }

   renderContentBasedOnStatus = () => {
      const { text, textStyle, renderLoader } = this.props
      if (this.isFetching()) {
         return renderLoader()
      }
      return <StyledText style={textStyle}>{text}</StyledText>
   }

   render() {
      const { onClick, disabled, className } = this.props
      return (
         <StyledButton
            onClick={onClick}
            disabled={disabled}
            className={className}
         >
            {this.renderContentBasedOnStatus()}
         </StyledButton>
      )
   }
}

export default Button
