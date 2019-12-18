import * as React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'

import BaseCheckBox from '../BaseCheckBox'
import ErrorMessage from '../ErrorMessage'

import { ValidationResponseType } from './types'
import { CheckBoxContainer, MainContainer } from './styledComponents'

interface Options {
   label: string
   value: string
}

interface CheckBoxProps {
   options: Array<Options>
   disabled?: boolean
   validate?: () => ValidationResponseType
   containerClassName?: string
   onSelectOption: (value: string) => void
   selectedValue?: string
   className?: string
   errorId?: string
   errorMessage?: string
}

@observer
class CheckBox extends React.Component<CheckBoxProps> {
   ref
   @observable checkedValues: string[] = []

   constructor(props) {
      super(props)
      this.ref = React.createRef()
   }

   static defaultProps = {
      disabled: false
   }

   componentDidMount() {
      this.getSelectedValue()
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

   onSelectOption = (value: string) => {
      const { onSelectOption } = this.props
      if (value) {
         const index = this.checkedValues.indexOf(value)
         if (index === -1) {
            this.checkedValues.push(value)
         } else {
            this.checkedValues.splice(index, 1)
         }
      }
      onSelectOption(value)
   }

   getSelectedValues = () => this.checkedValues

   isValueChecked = option => {
      const index = this.checkedValues.indexOf(option)
      if (index !== -1) return true
      return false
   }

   getSelectedValue = () => {
      const { selectedValue } = this.props
      if (selectedValue) {
         const index = this.checkedValues.indexOf(selectedValue)
         if (index === -1) {
            this.checkedValues.push(selectedValue)
         }
      }
   }

   renderOptions = () => {
      const { options, disabled } = this.props
      const radioButtons = options.map((option, index) => (
         <BaseCheckBox
            ref={this.ref}
            key={option.label + index}
            disabled={disabled}
            testId={option.label}
            value={option.value}
            onSelectOption={this.onSelectOption}
            checked={this.isValueChecked(option.value)}
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
            <CheckBoxContainer className={containerClassName}>
               {this.renderOptions()}
            </CheckBoxContainer>
            {this.isError && (
               <ErrorMessage errorId={errorId} errorMessage={errorMessage} />
            )}
         </MainContainer>
      )
   }
}

export default CheckBox
