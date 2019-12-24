import * as React from 'react'
import { observer } from 'mobx-react'

import RadioButtonNormalIcon from '../../../icons/RadioButtonNormalIcon'
import RadioButtonSelectedIcon from '../../../icons/RadioButtonSelectedIcon'
import RadioButtonDisabledIcon from '../../../icons/RadioButtonDisabledIcon'
import RadioButtonSelectedDisabledIcon from '../../../icons/RadioButtonSelectedDisabledIcon'

import { RadioButtonValue } from './styledComponents'
import './styles.css'

interface BaseRadioButtonProps {
   onChange: (value: string) => void
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
      const { onChange, disabled } = this.props

      if (!disabled) {
         onChange(e.target.value)
      }
   }

   getDisabledClassName = () => {
      const { disabled } = this.props

      if (disabled) {
         return <RadioButtonDisabledIcon />
      }
      return ''
   }
   renderRadioButtons = () => {
      const { checked, disabled } = this.props
      if (checked) {
         if (disabled) {
            return (
               <div className='radioImage'>
                  <RadioButtonSelectedDisabledIcon />
               </div>
            )
         }
         return (
            <div className='radioImage'>
               <RadioButtonSelectedIcon />
            </div>
         )
      }
      if (disabled) {
         return (
            <div className='radioImage'>
               <RadioButtonDisabledIcon />
            </div>
         )
      }
      return (
         <div className='radioImage'>
            <RadioButtonNormalIcon />
         </div>
      )
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
               {this.renderRadioButtons()}
               <RadioButtonValue>{value}</RadioButtonValue>
            </label>
         </div>
      )
   }
}

export default BaseRadioButton
