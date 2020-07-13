import React, { Component } from 'react'
import { components } from 'react-select'
import { observer } from 'mobx-react'
import { observable, action, computed } from 'mobx'
import { withTranslation } from 'react-i18next'
import 'twin.macro'

import ErrorMessage from '../ErrorMessage'

import { ValidationResponseType } from './types'

import {
   DropDownContainer,
   MenuOption,
   SelectField,
   SelectContainer,
   ValueOptionText,
   DropDownIcon
} from './styledComponents'
import './styles.css'

const ValueContainer = ({
   children,
   ...props
}: DropDownProps): React.ReactNode => (
   <components.ValueContainer {...props}>
      <SelectContainer>
         <ValueOptionText>{children}</ValueOptionText>
      </SelectContainer>
   </components.ValueContainer>
)

const DropdownIndicator = props => {
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

const Option = (props: DropDownProps) => {
   const { isSelected, children } = props
   return (
      <components.Option {...props}>
         <MenuOption isSelected={isSelected}>{children}</MenuOption>
      </components.Option>
   )
}

const NoOptionsMessage = (props: DropDownProps) => {
   const { t } = props
   return (
      <components.NoOptionsMessage {...props}>
         {t('common:dropDown.noOptionsToselect')}
      </components.NoOptionsMessage>
   )
}

const TranslatedNoOptionsMessage = withTranslation()(NoOptionsMessage)

interface DropDownProps {
   validate?: () => ValidationResponseType

   dropDownCss?: any

   containerCss?: any

   shouldDisableForSingleOption?: boolean

   [x: string]: any
}

@observer
class DropDown extends Component<DropDownProps> {
   dropdownRef

   constructor(props) {
      super(props)
      this.dropdownRef = React.createRef()
   }

   static defaultProps = {
      validate: () => ({ shouldShowError: false, errorMessage: '' }),
      shouldDisableForSingleOption: false
   }

   @observable error = ''

   @action setError(errorText: string) {
      this.error = errorText
   }

   onBlur = () => {
      const { validate } = this.props
      if (validate) {
         const result = validate()
         if (result.shouldShowError) {
            this.setError(result.errorMessage)
         } else {
            this.setError('')
         }
      }
   }

   onFocus = () => {
      this.setError('')
   }

   @computed get isError() {
      return this.error !== ''
   }

   isOnlyOneOption = (): boolean => {
      const { options } = this.props
      return options && options.length === 1
   }

   getIsDisabled = (): boolean => {
      const { isDisabled, shouldDisableForSingleOption } = this.props
      return (
         (shouldDisableForSingleOption && this.isOnlyOneOption()) || isDisabled
      )
   }

   render() {
      const {
         className,
         errorId,
         dropDownCss,
         containerCss,
         ...otherProps
      } = this.props

      return (
         <DropDownContainer className={className} css={containerCss}>
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
               css={dropDownCss}
               {...otherProps}
               isDisabled={this.getIsDisabled()}
            />
            <ErrorMessage errorMessage={this.error} />
         </DropDownContainer>
      )
   }
}

export default DropDown
