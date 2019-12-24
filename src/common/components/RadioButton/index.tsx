import * as React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'

import { ValidationResponseType } from '../CheckBoxGroup/types'
import BaseRadioButton from '../BaseRadioButton'

import {
   RadioButtonsContainer,
   ErrorMessage,
   MainContainer
} from './styledComponents'

interface Options {
   label: string
   value: string
}

interface RadioButtonProps {
   options: Array<Options>
   disabled?: boolean
   validate?: () => ValidationResponseType
   containerClassName?: string
   onChange: (value: string) => void
   selectedValue?: string
   className?: string
   errorId?: string
   errorMessage?: string
}

@observer
class RadioButton extends React.Component<RadioButtonProps> {
   static defaultProps = {
      disabled: false
   }

   @observable error = ''

   @action setError(errorText: string) {
      this.error = errorText
   }

   @computed get isError() {
      return this.error !== ''
   }

   onValidate = () => {
      const { validate } = this.props
      if (validate) {
         const result = validate()
         if (result.shouldShowError) {
            this.setError(result.errorMessage)
         } else {
            this.setError('')
         }
      }
   }

   onChange = (value: string) => {
      const { onChange } = this.props
      onChange(value)
   }

   renderOptions = () => {
      const { options, selectedValue, disabled } = this.props
      const radioButtons = options.map((option, index) => (
         <BaseRadioButton
            key={option.label + index}
            disabled={disabled}
            testId={option.label}
            value={option.value}
            onChange={this.onChange}
            checked={selectedValue === option.value}
         />
      ))

      return radioButtons
   }

   render() {
      const {
         containerClassName,
         className,
         errorId,
         errorMessage
      } = this.props

      return (
         <MainContainer className={className}>
            <RadioButtonsContainer className={containerClassName}>
               {this.renderOptions()}
            </RadioButtonsContainer>
            {this.isError && (
               <ErrorMessage errorId={errorId} errorMessage={errorMessage} />
            )}
         </MainContainer>
      )
   }
}

export default RadioButton
