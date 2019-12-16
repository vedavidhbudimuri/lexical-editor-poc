import * as React from 'react'
import { observer } from 'mobx-react'

import RadioButtonNormalIcon from '../../../icons/RadioButtonNormalIcon'
import RadioButtonSelectedIcon from '../../../icons/RadioButtonSelectedIcon'
import RadioButtonDisabledIcon from '../../../icons/RadioButtonDisabledIcon'
import RadioButtonSelectedDisabledIcon from '../../../icons/RadioButtonSelectedDisabledIcon'

import { RadioButtonValue } from './styledComponents'
import './styles.css'

interface BaseRadioButtonProps {
   onSelectOption: (value: string) => void
   disabled?: boolean
   value: string
   testId?: string
   checked?: boolean
}

@observer
class BaseRadioButton extends React.Component<BaseRadioButtonProps> {
   static defaultProps = {
      checked: false,
      disabled: false,
      testId: 'radioButton'
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
         return <RadioButtonDisabledIcon />
      }
      return ''
   }

   render() {
      const { value, checked, testId, disabled } = this.props

      return (
         <div className='radioButtonContainer'>
            <label className='labelStyle'>
               <input
                  data-testid={testId}
                  type='radio'
                  checked={checked}
                  onChange={this.onChange}
                  value={value}
               />
               {!checked && !disabled && (
                  <div className='radioImage'>
                     <RadioButtonNormalIcon />
                  </div>
               )}
               {checked && !disabled && (
                  <div className='radioImage'>
                     <RadioButtonSelectedIcon />
                  </div>
               )}
               {!checked && disabled && (
                  <div className='radioImage'>
                     <RadioButtonDisabledIcon />
                  </div>
               )}
               {checked && disabled && (
                  <div className='radioImage'>
                     <RadioButtonSelectedDisabledIcon />
                  </div>
               )}
               <RadioButtonValue>{value}</RadioButtonValue>
            </label>
         </div>
      )
   }
}

//TODO:make overflow label response styles

export default BaseRadioButton
