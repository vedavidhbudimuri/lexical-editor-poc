import * as React from 'react'
import { APIStatus, API_INITIAL, API_FETCHING } from '@ib/api-constants'

import Colors from '../../../themes/Colors'

import { StyledText } from '../Button/styledComponents'
import Button from '../Button'
import Loader from '../Loader'

interface ButtonWithLoaderProps {
   text: string
   onClick: () => any
   apiStatus: APIStatus
   textComponent: React.ElementType
   textStyle: object
   disabled: boolean
   renderLoader: () => any
}

class ButtonWithLoader extends React.Component<ButtonWithLoaderProps> {
   static defaultProps = {
      apiStatus: API_INITIAL,
      disabled: false,
      renderLoader: () => (
         <Loader color={Colors.white} height={25} width={25} />
      ),
      textStyle: { fontSize: 20 },
      className: '',
      textComponent: StyledText
   }

   isFetching = () => {
      const { apiStatus } = this.props
      return apiStatus === API_FETCHING
   }

   renderContentBasedOnStatus = () => {
      const {
         text,
         textStyle,
         textComponent: ButtonText,
         renderLoader
      } = this.props
      if (this.isFetching()) {
         return renderLoader()
      }
      return <ButtonText style={textStyle}>{text}</ButtonText>
   }
   render() {
      const { onClick } = this.props
      return (
         <Button disabled={this.isFetching()} onClick={onClick}>
            {this.renderContentBasedOnStatus()}
         </Button>
      )
   }
}

export default ButtonWithLoader
