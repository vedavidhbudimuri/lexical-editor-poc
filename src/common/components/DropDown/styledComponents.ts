import styled from 'styled-components'
import Select from 'react-select'

import Colors from '../../../themes/Colors'
import ReactSelectDropDownArrow from '../../../icons/ReactSelectDropDownArrow'
import { BaseRobotoText } from '../../../styleGuide/Typos'

export const DropDownContainer = styled('div')`
   width: 100%;
   margin: 20px 0px 0px 0px;
`

export const SelectField = styled(Select)`
   outline: none;
   width: 100%;
   height: 50px;
   padding: 0px;
   background-color: ${Colors.white};
   border-radius: 5px;
   border: solid 1px
      ${props => {
         if (props.isDisabled) {
            return Colors.primaryColor
         } else if (props.isValid) {
            return Colors.black
         }
         return Colors.white50
      }};
   align-items: center;
   justify-content: center;
   .Select-container {
      height: 48px;
   }
   .Select__control {
      height: 48px;
      border: solid 1px
         ${props => (props.isValid ? Colors.black : Colors.white50)};
      background-color: ${Colors.white};
   }
   .Select-placeholder {
      padding-left: 15px;
      height: 48px;
   }
   .Select__value-container {
      padding: 0 0 0 15px;
      display: flex;
      align-items: center;
      cursor: text;
   }
   .Select__single-value {
      margin: 0px;
      padding-left: 2px;
      font-family: Roboto;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.15px;
      color: ${Colors.black};
   }
   .Select__indicator-separator {
      opacity: 0;
   }
   .Select__dropdown-indicator {
      padding: 0 10px 0 0;
      cursor: pointer;
   }
   .Select__menu {
      margin-top: 5px !important;
      padding: 0px;
   }
   .Select__menu-list {
      padding: 0px;
      box-shadow: 2px 6px 10px 0 ${Colors.black};
      border: solid 1px ${Colors.primaryColor};
      max-height: 294px;
   }
   .Select__option {
      padding: 13.5px 0px 13.5px 20px;
      cursor: pointer;
      color: ${Colors.black};
      background-color: ${Colors.white};
   }
   .Select__option--is-focused {
      background-color: ${Colors.paleGrey};
   }
   .Select__option--is-selected {
      background-color: ${Colors.primaryColor};
   }
   .Select__control--is-disabled {
      background-color: ${Colors.paleGrey};
      border: solid 1px ${Colors.primaryColor} !important;
   }
`

export const MenuOption = styled(BaseRobotoText)`
   line-height: 1.5;
   letter-spacing: 0.15px;
   padding-top: 13.5px;
   padding-bottom: 13.5px;
`

export const DropDownIcon = styled(ReactSelectDropDownArrow)`
   transform: ${props =>
      props.isInverted ? 'rotate(0deg)' : 'rotate(180deg)'};
`

export const SelectContainer = styled('div')`
   display: flex;
   flex-direction: row;
   align-items: center;
`

export const BaseRobotoTextWithDiv = BaseRobotoText.withComponent('div')

export const ValueOptionText = styled(BaseRobotoTextWithDiv)`
   opacity: 0.9;
   font-family: Roboto;
   font-size: 16px;
   text-align: left;
   color: ${Colors.black};
   line-height: unset;
   padding-left: 0px;
`
