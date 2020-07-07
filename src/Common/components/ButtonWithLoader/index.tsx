import * as React from 'react'
import { API_INITIAL, API_FETCHING, APIStatus } from '@ib/api-constants'

import Colors from '../../themes/Colors'

import Loader from '../Loader'

import { StyledButton, StyledText } from './styledComponents'
import './styles.css'

export interface ButtonWithLoaderProps {
   text: string
   onClick: Function
   apiStatus: APIStatus
   className: string
   textTypo: React.ElementType
   textClassName?: string
   disabled: boolean
   renderLoader: Function
   id?: string
   renderRightIcon?: Function
}

class ButtonWithLoader extends React.Component<ButtonWithLoaderProps> {
   static defaultProps = {
      apiStatus: API_INITIAL,
      disabled: false,
      renderLoader: () => (
         <Loader
            color={Colors.primaryColor}
            height={25}
            width={25}
            className='loaderStyles'
         />
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
         renderLoader,
         renderRightIcon
      } = this.props

      if (this.isFetching()) {
         return renderLoader()
      }
      return (
         <ButtonText className={textClassName}>
            {text}
            {renderRightIcon && renderRightIcon()}
         </ButtonText>
      )
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

export default ButtonWithLoader
