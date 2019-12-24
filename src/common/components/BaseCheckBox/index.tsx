import * as React from 'react'
import { observer } from 'mobx-react'

import BaseCheckBoxNormalIcon from '../../../icons/BaseCheckBoxNormalIcon'
import BaseCheckBoxSelectedIcon from '../../../icons/BaseCheckBoxSelectedIcon'
import CheckBoxDisabled from '../../../icons/CheckBoxDisabled'
import CheckBoxSelectedDisabledIcon from '../../../icons/CheckBoxSelectedDisabledIcon'

import { CheckBoxValue } from './styledComponents'

import './styles.css'

interface BaseCheckBoxProps {
   onChange: (value: string) => void
   disabled?: boolean
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
                  <CheckBoxSelectedDisabledIcon width={15} height={15} />
               </div>
            )
         }
         return (
            <div className='checkBoxImage'>
               <BaseCheckBoxSelectedIcon width={16} height={16} />
            </div>
         )
      }
      if (disabled) {
         return (
            <div className='checkBoxImage'>
               <CheckBoxDisabled width={15} height={15} />
            </div>
         )
      }
      return (
         <div className='checkBoxImage'>
            <BaseCheckBoxNormalIcon width={16} height={16} />
         </div>
      )
   }

   render() {
      const { value, checked, testId, disabled } = this.props

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
               <CheckBoxValue>{value}</CheckBoxValue>
            </label>
         </div>
      )
   }
}

export default BaseCheckBox
