import * as React from 'react'
import { observer } from 'mobx-react'

import BaseCheckBoxNormalIcon from '../../../icons/BaseCheckBoxNormalIcon'
import BaseCheckBoxSelectedIcon from '../../../icons/BaseCheckBoxSelectedIcon'
import CheckBoxDisabled from '../../../icons/CheckBoxDisabled'
import CheckBoxSelectedDisabledIcon from '../../../icons/CheckBoxSelectedDisabledIcon'

import { CheckBoxLabel } from './styledComponents'

import './styles.css'

interface BaseCheckBoxProps {
   onChange: (value: string) => void
   disabled?: boolean
   label: string

   value: string
   testId?: string
   checked?: boolean
}

@observer
class BaseCheckBox extends React.Component<BaseCheckBoxProps> {
   static defaultProps = {
      checked: false,
      disabled: false,
      testId: 'checkbox'
   }

   onChange = e => {
      const { onChange, disabled } = this.props

      if (!disabled) {
         onChange(e.target.value)
      }
   }

   renderCheckBox = () => {
      const { checked, disabled } = this.props
      if (checked) {
         if (disabled) {
            return (
               <div className='checkBoxImage'>
                  <CheckBoxSelectedDisabledIcon />
               </div>
            )
         }
         return (
            <div className='checkBoxImage'>
               <BaseCheckBoxSelectedIcon />
            </div>
         )
      }
      if (disabled) {
         return (
            <div className='checkBoxImage'>
               <CheckBoxDisabled />
            </div>
         )
      }
      return (
         <div className='checkBoxImage'>
            <BaseCheckBoxNormalIcon />
         </div>
      )
   }

   render() {
      const { label, value, checked, testId, disabled } = this.props

      return (
         <div className='checkBoxContainer'>
            <label className='labelStyle'>
               <input
                  data-testid={testId}
                  type='checkbox'
                  checked={checked}
                  onChange={this.onChange}
                  value={value}
               />
               {this.renderCheckBox()}
               <CheckBoxLabel>{label}</CheckBoxLabel>
            </label>
         </div>
      )
   }
}

export default BaseCheckBox
