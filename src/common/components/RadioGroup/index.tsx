import * as React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import 'styled-components/macro'

import { ValidationResponseType } from '../CheckBoxGroup/types'
import BaseRadioButton from '../BaseRadioButton'
import { RadioButtonOption } from '../BaseRadioButton/types'
import ErrorMessage from '../ErrorMessage'

import { RadioGroupContainer, MainContainer } from './styledComponents'

interface RadioGroupProps {
   options: Array<RadioButtonOption>
   disabled?: boolean
   validate: () => ValidationResponseType
   containerClassName?: string
   onSelectOption: (value: string) => void
   selectedValue?: string
   className?: string
   errorId?: string
   radioItemCss?: string
   radioImageCss?: string
   radioItemsContainerCss?: string
   radioMainContainerCss?: string
   radioImageSize?: number
}

@observer
class RadioGroup extends React.Component<RadioGroupProps> {
   static defaultProps = {
      disabled: false,
      validate: () => {}
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
      const result = validate()
      if (result.shouldShowError) {
         this.setError(result.errorMessage)
      } else {
         this.setError('')
      }
   }

   onSelectOption = (value: string) => {
      const { onSelectOption } = this.props
      onSelectOption(value)
   }

   renderOptions = () => {
      const {
         options,
         selectedValue,
         disabled,
         radioItemCss,
         radioImageCss,
         radioImageSize
      } = this.props

      const radioButtons = options.map((option, index) => (
         <BaseRadioButton
            key={option.label + index}
            disabled={disabled}
            testId={option.label}
            option={option}
            onSelectOption={this.onSelectOption}
            checked={selectedValue === option.value}
            labelStyleCss={radioItemCss}
            radioImageStyleCss={radioImageCss}
            radioImageSize={radioImageSize}
         />
      ))

      return radioButtons
   }

   render() {
      const {
         containerClassName,
         className,
         radioMainContainerCss,
         radioItemsContainerCss
      } = this.props

      return (
         <MainContainer className={className} css={radioMainContainerCss}>
            <RadioGroupContainer
               className={containerClassName}
               css={radioItemsContainerCss}
            >
               {this.renderOptions()}
            </RadioGroupContainer>
            <ErrorMessage errorMessage={this.error} />
         </MainContainer>
      )
   }
}

export default RadioGroup
