import React, { Component } from 'react'
import { observer } from 'mobx-react'

import BaseInput from './BaseInput'

import { textAreaStyles } from './styledComponents'

import { InputProps } from './types'

@observer
class TextArea extends Component<InputProps> {
   inputRef

   constructor(props) {
      super(props)
      this.inputRef = React.createRef()
   }

   validateInput = () => {
      this.inputRef.current.validateInput()
   }

   onBlur = () => {
      this.inputRef.current.onBlur()
   }

   onFocus = () => {
      this.inputRef.current.onFocus()
   }

   focus = () => {
      this.inputRef.current.focus()
   }

   render() {
      return (
         <BaseInput
            style={textAreaStyles}
            rows='3'
            ref={this.inputRef}
            {...this.props}
            tagName='textarea'
         />
      )
   }
}

export default TextArea
