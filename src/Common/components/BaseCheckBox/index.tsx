import * as React from 'react'
import { observer } from 'mobx-react'
import 'styled-components/macro'

import BaseCheckBoxNormalIcon from '../../icons/BaseCheckBoxNormalIcon'
import BaseCheckBoxSelectedIcon from '../../icons/BaseCheckBoxSelectedIcon'
import CheckBoxDisabled from '../../icons/CheckBoxDisabled'
import CheckBoxSelectedDisabledIcon from '../../icons/CheckBoxSelectedDisabledIcon'

import {
   CheckBoxLabel,
   Input,
   Label,
   LabelComponentContainer
} from './styledComponents'

import './styles.css'

interface BaseCheckBoxProps {
   onChange: (value: string) => void
   disabled?: boolean
   label: string
   value: string
   testId?: string
   checked?: boolean
   checkBoxTextCss?: React.CSSProperties
   checkBoxSize?: number
   renderLabelComponent?: () => {}
   labelComponentContainerCss?: React.CSSProperties
   checkBoxContainerCss?: React.CSSProperties
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
      const { checked, disabled, checkBoxSize } = this.props
      if (checked) {
         if (disabled) {
            return (
               <div className='checkBoxImage'>
                  <CheckBoxSelectedDisabledIcon
                     width={checkBoxSize}
                     height={checkBoxSize}
                  />
               </div>
            )
         }
         return (
            <div className='checkBoxImage'>
               <BaseCheckBoxSelectedIcon
                  width={checkBoxSize}
                  height={checkBoxSize}
               />
            </div>
         )
      }
      if (disabled) {
         return (
            <div className='checkBoxImage'>
               <CheckBoxDisabled width={checkBoxSize} height={checkBoxSize} />
            </div>
         )
      }
      return (
         <div className='checkBoxImage'>
            <BaseCheckBoxNormalIcon
               width={checkBoxSize}
               height={checkBoxSize}
            />
         </div>
      )
   }

   renderLabel = () => {
      const {
         label,
         renderLabelComponent,
         checkBoxTextCss,
         labelComponentContainerCss
      } = this.props

      if (renderLabelComponent) {
         return (
            <LabelComponentContainer css={labelComponentContainerCss}>
               {renderLabelComponent}
            </LabelComponentContainer>
         )
      }
      return <CheckBoxLabel css={checkBoxTextCss}>{label}</CheckBoxLabel>
   }

   render() {
      const { value, checked, testId, checkBoxContainerCss } = this.props

      return (
         <Label className='labelStyle' css={checkBoxContainerCss}>
            <Input
               data-testid={testId}
               type='checkbox'
               checked={checked}
               onChange={this.onChange}
               value={value}
            />
            {this.renderCheckBox()}
            {this.renderLabel()}
         </Label>
      )
   }
}

export default BaseCheckBox
