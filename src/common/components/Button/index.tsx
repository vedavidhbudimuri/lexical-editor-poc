import * as React from 'react'
import { APIStatus, API_INITIAL, API_FETCHING } from '@ib/api-constants'

import colors from '../../../themes/Colors'

import Loader from '../Loader'

import { StyledButton, StyledText } from './ styledComponents'

interface ButtonProps {
   text: string
   onClick: () => any
   apiStatus: APIStatus
   style: object
   textStyle: object
   disabled: boolean
   renderLoader: () => any
}

class Button extends React.Component<ButtonProps> {
   static defaultProps = {
      apiStatus: API_INITIAL,
      disabled: false,
      renderLoader: () => (
         <Loader color={colors.white} height={25} width={25} />
      ),
      style: {
         height: 30,
         width: 100,
         backgroundColor: colors.primaryColor,
         color: colors.white
      },
      textStyle: { fontSize: 20 }
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
      const { onClick, disabled, style } = this.props
      return (
         <StyledButton onClick={onClick} disabled={disabled} style={style}>
            {this.renderContentBasedOnStatus()}
         </StyledButton>
      )
   }
}

export default Button
