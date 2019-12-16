import * as React from 'react'
import { observer } from 'mobx-react'

import BaseCheckBoxNormalIcon from '../../../icons/BaseCheckBoxNormalIcon'
import BaseCheckBoxSelectedIcon from '../../../icons/BaseCheckBoxSelectedIcon'
import CheckBoxDisabled from '../../../icons/CheckBoxDisabled'
import CheckBoxSelectedDisabledIcon from '../../../icons/CheckBoxSelectedDisabledIcon'

import './styles.css'

interface BaseCheckBoxProps {
   onSelectOption: (value: string) => void
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
      const { onSelectOption, disabled } = this.props

      if (!disabled) {
         onSelectOption(e.target.value)
      }
   }

   render() {
      const { value, checked, testId, disabled } = this.props

      return (
         <div>
            <label className='labelStyle'>
               <input
                  data-testid={testId}
                  type='checkbox'
                  checked={checked}
                  onChange={this.onChange}
                  value={value}
               />
               {!checked && !disabled && (
                  <div className='radioImage'>
                     <BaseCheckBoxNormalIcon />
                  </div>
               )}
               {checked && !disabled && (
                  <div className='radioImage'>
                     <BaseCheckBoxSelectedIcon />
                  </div>
               )}
               {!checked && disabled && (
                  <div className='radioImage'>
                     <CheckBoxDisabled />
                  </div>
               )}
               {checked && disabled && (
                  <div className='radioImage'>
                     <CheckBoxSelectedDisabledIcon />
                  </div>
               )}
               {value}
            </label>
         </div>
      )
   }
}

//TODO:make overflow label response styles

export default BaseCheckBox
