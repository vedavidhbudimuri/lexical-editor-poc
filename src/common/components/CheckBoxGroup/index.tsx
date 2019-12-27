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
   onChange: (value: string) => void
   selectedValues: Array<string>
   className?: string
   errorId?: string
   errorMessage?: string
}

@observer
class CheckboxGroup extends React.Component<CheckBoxProps> {
   ref
   @observable checkedValues: string[] = []

   constructor(props) {
      super(props)
      this.ref = React.createRef()
   }

   static defaultProps = {
      disabled: false,
      selectedValues: []
   }

   componentDidMount() {
      this.setSelectedValues()
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
      if (value) {
         const index = this.checkedValues.indexOf(value)
         if (index === -1) {
            this.checkedValues.push(value)
         } else {
            this.checkedValues.splice(index, 1)
         }
      }
      onChange(value)
   }

   getSelectedValues = () => this.checkedValues

   isValueChecked = (value: string) => {
      const index = this.checkedValues.indexOf(value)
      if (index !== -1) return true
      return false
   }

   setSelectedValues = () => {
      const { selectedValues } = this.props
      selectedValues.map(value => this.checkedValues.push(value))
   }

   renderOptions = () => {
      const { options, disabled } = this.props
      const radioButtons = options.map((option, index) => (
         <BaseCheckBox
            ref={this.ref}
            key={option.label + index}
            disabled={disabled}
            testId={option.label}
            label={option.label}
            value={option.value}
            onChange={this.onChange}
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

export default CheckboxGroup
