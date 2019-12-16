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
   disabled: boolean
   textTypo: React.ElementType
   textClassName?: string
   id?: string
   renderLoader: () => any
}

class Button extends React.Component<ButtonProps> {
   static defaultProps = {
      apiStatus: API_INITIAL,
      disabled: false,
      renderLoader: () => (
         <Loader color={Colors.white} height={25} width={25} />
      ),
      textTypo: StyledText,
      textClassName: '',
      className: ''
   }

   isFetching = () => {
      const { apiStatus } = this.props
      return apiStatus === API_FETCHING
   }

   renderContentBasedOnStatus = () => {
      const {
         text,
         textTypo: ButtonText,
         textClassName,
         renderLoader
      } = this.props
      if (this.isFetching()) {
         return renderLoader()
      }
      return <ButtonText className={textClassName}>{text}</ButtonText>
   }

   render() {
      const { onClick, disabled, className, id, ...otherProps } = this.props
      return (
         <StyledButton
            onClick={onClick}
            disabled={disabled || this.isFetching()}
            className={className}
            id={id}
            {...otherProps}
         >
            {this.renderContentBasedOnStatus()}
         </StyledButton>
      )
   }
}

export default Button
