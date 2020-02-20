import styled from 'styled-components'
import Select from 'react-select'

import Colors from '../../../themes/Colors'
import ReactSelectDropDownArrow from '../../../icons/ReactSelectDropDownArrow'
import {
   Typo14DarkRR,
   Typo16DuskRR,
   Typo12PinkishOrangeRoboto
} from '../../../styleGuide/Typos'

export const DropDownContainer = styled('div')`
   width: 100%;
`

export const SelectField = styled(Select)`
   outline: none;
   width: 100% !important;
   height: 50px;
   padding: 0px;
   background-color: ${props =>
      props.isDisabled ? Colors.paleGreyFour : Colors.whiteTwo};
   border-radius: 5px;
   border: solid 1px
      ${props => {
         if (props.isDisabled) {
            return Colors.black32
         } else if (props.isValid) {
            return Colors.black32
         }
         return Colors.pinkishOrange
      }};
   align-items: center;
   justify-content: center;
   .Select-container {
      height: 48px;
   }
   .Select__control {
      height: 48px;
      border: solid 1px
         ${props => (props.isValid ? Colors.black32 : Colors.pinkishOrange)};
      background-color: ${Colors.whiteTwo};
   }
   .Select__placeholder {
      color: ${props => props.isDisabled && Colors.darkGreyBlueTwoSix};
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
      color: ${props =>
         props.isDisabled ? Colors.darkGreyBlueTwoSix : Colors.blackSeven};
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
      box-shadow: 2px 6px 10px 0 ${Colors.black12};
      border: solid 1px ${Colors.paleGrey};
      max-height: 150px;
   }
   .Select__option {
      padding: 13.5px 0px 13.5px 20px;
      cursor: pointer;
      color: ${Colors.dusk};
      background-color: ${Colors.whiteTwo};
   }
   .Select__option--is-focused {
      background-color: ${Colors.paleGrey};
   }
   .Select__option--is-selected {
      background-color: ${Colors.paleGrey};
   }
   .Select__control--is-disabled {
      border-width: 0px;
      border-color: ${Colors.black32};
      font-family: 'Roboto';
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.2px;
      color: ${Colors.darkGreyBlueTwoSix} !important;
   }
`

export const MenuOption = styled(Typo16DuskRR)`
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

export const Typo14DarkRRWithDiv = Typo14DarkRR.withComponent('div')

export const ValueOptionText = styled(Typo14DarkRRWithDiv)`
   opacity: 0.9;
   font-family: Roboto;
   font-size: 16px;
   text-align: left;
   color: ${Colors.dark};
   line-height: unset;
   padding-left: 0px;
`

export const ErrorView = styled.div`
   flex-direction: row;
   margin-top: 3px;
   margin-left: 3px;
`

export const ErrorMessage = styled(Typo12PinkishOrangeRoboto)`
   line-height: 2.03;
   letter-spacing: 0.11px;
   pointer-events: none;
`
