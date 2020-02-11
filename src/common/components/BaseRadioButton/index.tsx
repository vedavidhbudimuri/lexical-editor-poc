import * as React from 'react'
import { observer } from 'mobx-react'
import 'styled-components/macro'

import RadioButtonNormalIcon from '../../../icons/RadioButtonNormalIcon'
import RadioButtonSelectedIcon from '../../../icons/RadioButtonSelectedIcon'
import RadioButtonDisabledIcon from '../../../icons/RadioButtonDisabledIcon'
import RadioButtonSelectedDisabledIcon from '../../../icons/RadioButtonSelectedDisabledIcon'

import './styles.css'
import { RadioButtonOption } from './types'
import {
   RadioInput,
   Label,
   RadioImageContainer,
   LabelComponentContainer
} from './styledComponents'

interface BaseRadioButtonProps {
   onSelectOption: (value: string) => void
   disabled?: boolean
   option: RadioButtonOption
   testId?: string
   checked?: boolean
   labelStyleCss?: string
   radioImageStyleCss?: string
   radioImageSize?: number
   renderLabelComponent?: () => {}
   labelComponentContainerCss?: React.CSSProperties
}

@observer
class BaseRadioButton extends React.Component<BaseRadioButtonProps> {
   static defaultProps = {
      checked: false,
      disabled: false,
      testId: 'radioButton',
      labelStyleCss: {},
      radioImageStyleCss: {}
   }

   onChange = e => {
      const { onSelectOption, disabled } = this.props

      if (!disabled) {
         onSelectOption(e.target.value)
      }
   }

   renderRadioButtons = () => {
      const {
         checked,
         disabled,
         radioImageStyleCss,
         radioImageSize
      } = this.props
      if (checked) {
         if (disabled) {
            return (
               <RadioImageContainer
                  className='radioImage'
                  css={radioImageStyleCss}
               >
                  <RadioButtonSelectedDisabledIcon
                     height={radioImageSize}
                     width={radioImageSize}
                  />
               </RadioImageContainer>
            )
         }
         return (
            <RadioImageContainer
               className='radioImage'
               css={radioImageStyleCss}
            >
               <RadioButtonSelectedIcon
                  height={radioImageSize}
                  width={radioImageSize}
               />
            </RadioImageContainer>
         )
      }
      if (disabled) {
         return (
            <RadioImageContainer
               className='radioImage'
               css={radioImageStyleCss}
            >
               <RadioButtonDisabledIcon
                  height={radioImageSize}
                  width={radioImageSize}
               />
            </RadioImageContainer>
         )
      }
      return (
         <RadioImageContainer className='radioImage' css={radioImageStyleCss}>
            <RadioButtonNormalIcon
               height={radioImageSize}
               width={radioImageSize}
            />
         </RadioImageContainer>
      )
   }

   renderLabel = () => {
      const {
         option,
         renderLabelComponent,
         labelComponentContainerCss
      } = this.props

      if (renderLabelComponent) {
         return (
            <LabelComponentContainer css={labelComponentContainerCss}>
               {renderLabelComponent}
            </LabelComponentContainer>
         )
      }
      return option.label
   }

   render() {
      const { option, checked, testId, labelStyleCss } = this.props
      return (
         <Label css={labelStyleCss}>
            <RadioInput
               data-testid={testId}
               type='radio'
               checked={checked}
               onChange={this.onChange}
               value={option.value}
            />
            {this.renderRadioButtons()}
            {this.renderLabel()}
         </Label>
      )
   }
}
//TODO:make overflow label response styles

export default BaseRadioButton
