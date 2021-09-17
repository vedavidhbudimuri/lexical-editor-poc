import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'
import Colors from '../../themes/Colors'
import CustomDesignBatIcon from '../../icons/CustomDesignBatIcon/CustomDesignBat'
import IbCricketIcon from '../../icons/IbCricketIcon'
import OculusQuest2Icon from '../../icons/OculusQuest2Icon'
import AvailabilityOfIbcKit from '../AvailabilityOfIbcKit'

import {
   TextStyle10,
   TextStyle12,
   TextStyle73,
   TextStyle8
} from '../../styleGuide/Typos/index'
import { mobile } from '../../utils/MixinUtils'
import SkewedButton from '../SkewedButton'
import CheckoutHowItWorks from '../CheckoutHowItWorks'

export const BuyEntireKitCardContainer = styled.div`
   ${tw`flex flex-col`}
   background-color: ${Colors.darkTwo};
   height: 100%;
   max-height: 487px;
   width: 564px;
   @media (max-width: 768px) {
      max-width: unset;
      width: 100%;
      max-height: unset;
      overflow: scroll;
   }
`
export const SkewedButtonExtended = styled(SkewedButton)`
   margin-left: 24px;
`
export const KitContainer = styled.div`
   ${tw`flex flex-col items-center justify-center py-8 px-12`}
   flex-grow:1;

   @media (max-width: 768px) {
      height: unset;
   }
`

export const KitSpecificationsContainer = styled.div`
   ${tw`flex justify-around items-end w-full`}
   height: 154px;
   margin-top: auto;
   margin-bottom: auto;
   @media (max-width: 768px) {
      ${tw`flex-col justify-around items-center`}
      height: unset;
   }
`

export const BuyEntireKitTitle = styled(TextStyle8)`
   ${mobile} {
      ${tw`text-2xl`}
   }
`

export const IconContainer = styled.div`
   ${tw`flex flex-col items-center justify-end h-full`}
   width:144px;
   @media (max-width: 768px) {
      ${tw`mt-6`}
   }
`

export const ImageWrapper = styled.div`
   ${tw`flex w-full items-center h-full`}
`

export const IconDisplayText = styled(TextStyle73)`
   ${tw`m-2`}
   min-height:40px;
   margin-top: auto;
   @media (max-width: 768px) {
      font-size: 16px;
   }
`

export const HorizontalGradient = styled.div`
   ${tw`w-48 flex-grow-0  mr-32 ml-32`}
   width: 136px;
   height: 2px;
   background-image: linear-gradient(to right, #006fe3 50%, #ff6b00 50%);
`
export const TutorialVideoContainer = styled.div`
   ${tw`flex flex-row items-center justify-between text-blue-700 `}
   padding: 8px 24px;
   background-color: ${Colors.black40};
`

export const TutorialVideoTextContainer = styled.span`
   ${tw`flex justify-center items-center`}
`
export const TutorialVideoText = styled(TextStyle10)`
   margin-left: 8px;
`

export const IbCricketImage = styled(IbCricketIcon)`
   ${tw`w-full`}
   height:98px;
`

export const CustomDesignBatImage = styled(CustomDesignBatIcon)`
   ${tw`w-full`}
   height:64px;
   @media (max-width: 768px) {
      margin-bottom: 12px;
   }
`

export const OculusQuest2Image = styled(OculusQuest2Icon)`
   ${tw`w-full`}
   height:64px;

   @media (max-width: 768px) {
      margin-bottom: 12px;
   }
`

export const CheckoutHowItWorksContainer = styled(CheckoutHowItWorks)``

export const BuyEntireKitLink = styled(Link)`
   ${tw`flex items-center justify-center px-8	text-white	text-base	font-medium	border-0	`}
   font-family: 'nort';
   padding-top: 15px;
   padding-bottom: 15px;
   transform: skewX(-0.06turn);
   @media (max-width: 768px) {
      ${tw`px-4	py-3	`}
   }
   background-color: ${Colors.pumpkinOrange};

   * {
      pointer-events: none;
   }
`

export const BuyEntireKitText = styled(TextStyle12)`
   transform: skewX(+0.06turn);
   @media (max-width: 1024px) {
      ${tw`text-sm`}
   }
`

export const RightNavigationArrow = styled.img`
   transform: skewX(+0.06turn);
   padding-left: 15px;
`

export const AvailabilityOfIbcKitContainer = styled(AvailabilityOfIbcKit)`
   ${tw`flex justify-center items-center mb-8`}
`
