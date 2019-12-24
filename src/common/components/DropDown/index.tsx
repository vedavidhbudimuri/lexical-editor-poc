import React, { Component } from 'react'
import { components } from 'react-select'
import { observer } from 'mobx-react'
import { observable, action, computed } from 'mobx'
import { withTranslation } from 'react-i18next'

import { ValidationResponseType } from '../DatePicker/types'
import ErrorMessage from '../ErrorMessage'

import {
   DropDownContainer,
   MenuOption,
   SelectField,
   SelectContainer,
   ValueOptionText,
   DropDownIcon
} from './styledComponents'
import './styles.css'

const ValueContainer = ({ children, ...props }: any) => (
   <components.ValueContainer {...props}>
      <SelectContainer>
         <ValueOptionText>{children}</ValueOptionText>
      </SelectContainer>
   </components.ValueContainer>
)

const DropdownIndicator = (props: any) => {
   const { selectProps } = props
   const { menuIsOpen } = selectProps
   return (
      components.DropdownIndicator && (
         <components.DropdownIndicator {...props}>
            <DropDownIcon isInverted={menuIsOpen} />
         </components.DropdownIndicator>
      )
   )
}

const Option = (props: any) => {
   const { isSelected, children } = props
   return (
      <components.Option {...props}>
         <MenuOption isSelected={isSelected}>{children}</MenuOption>
      </components.Option>
   )
}

const NoOptionsMessage = (props: any) => {
   const { t } = props
   return (
      <components.NoOptionsMessage {...props}>
         {t('en:common.dropDown.noOptionsToselect')}
      </components.NoOptionsMessage>
   )
}

const TranslatedNoOptionsMessage = withTranslation()(NoOptionsMessage)

interface DropDownProps {
   [x: string]: any
   validate: () => ValidationResponseType
}

@observer
class DropDown extends Component<DropDownProps> {
   dropdownRef

   constructor(props) {
      super(props)
      this.dropdownRef = React.createRef()
   }

   static defaultProps = {
      validate: () => ({ shouldShowError: false, errorMessage: '' })
   }

   @observable error = ''

   @action setError(errorText: string) {
      this.error = errorText
   }

   onBlur = () => {
      const { validate } = this.props
      const result = validate()
      if (result.shouldShowError) {
         this.setError(result.errorMessage)
      } else {
         this.setError('')
      }
   }

   onFocus = () => {
      this.setError('')
   }

   @computed get isError() {
      return this.error !== ''
   }

   render() {
      const { className, isDisabled } = this.props
      return (
         <DropDownContainer className={className}>
            <SelectField
               ref={this.dropdownRef}
               isValid={!this.isError}
               onBlur={this.onBlur}
               onFocus={this.onFocus}
               components={{
                  ValueContainer,
                  DropdownIndicator,
                  Option,
                  NoOptionsMessage: TranslatedNoOptionsMessage
               }}
               classNamePrefix='Select'
               isDisabled={isDisabled}
               {...this.props}
            />
            <ErrorMessage errorMessage={this.error} />
         </DropDownContainer>
      )
   }
}

export default DropDown
