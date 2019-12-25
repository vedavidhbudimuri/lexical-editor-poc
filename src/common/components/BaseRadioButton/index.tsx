import * as React from 'react'
import { observer } from 'mobx-react'
import 'styled-components/macro'

import RadioButtonNormalIcon from '../../../icons/RadioButtonNormalIcon'
import RadioButtonSelectedIcon from '../../../icons/RadioButtonSelectedIcon'
import RadioButtonDisabledIcon from '../../../icons/RadioButtonDisabledIcon'
import RadioButtonSelectedDisabledIcon from '../../../icons/RadioButtonSelectedDisabledIcon'

import './styles.css'
import { RadioButtonOption } from './types'

interface BaseRadioButtonProps {
   onSelectOption: (value: string) => void
   disabled?: boolean
   option: RadioButtonOption
   testId?: string
   checked?: boolean
   labelStyleCss?: string
   radioImageStyleCss?: string
   radioImageSize?: number
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

   getDisabledClassName = () => {
      const { disabled } = this.props

      if (disabled) {
         return 'radioButtonContainerDisabled'
      }
      return ''
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
               <div className='radioImage' css={radioImageStyleCss}>
                  <RadioButtonSelectedDisabledIcon
                     height={radioImageSize}
                     width={radioImageSize}
                  />
               </div>
            )
         }
         return (
            <div className='radioImage' css={radioImageStyleCss}>
               <RadioButtonSelectedIcon
                  height={radioImageSize}
                  width={radioImageSize}
               />
            </div>
         )
      }
      if (disabled) {
         return (
            <div className='radioImage' css={radioImageStyleCss}>
               <RadioButtonDisabledIcon
                  height={radioImageSize}
                  width={radioImageSize}
               />
            </div>
         )
      }
      return (
         <div className='radioImage' css={radioImageStyleCss}>
            <RadioButtonNormalIcon
               height={radioImageSize}
               width={radioImageSize}
            />
         </div>
      )
   }

   render() {
      const { option, checked, testId, labelStyleCss } = this.props

      return (
         <div className={`radioButtonContainer ${this.getDisabledClassName()}`}>
            <label className='labelStyle' css={labelStyleCss}>
               <input
                  data-testid={testId}
                  type='radio'
                  checked={checked}
                  onChange={this.onChange}
                  value={option.value}
               />
               {this.renderRadioButtons()}
               {option.label}
            </label>
         </div>
      )
   }
}

//TODO:make overflow label response styles

export default BaseRadioButton
