import React, { Component } from 'react'
import IbCricketIcon from '../../icons/IbCricketIcon'
import OculusQuest2Icon from '../../icons/OculusQuest2Icon'
import SkewedButton from '../SkewedButton'
import {
   BuyEntireKitCardContainer,
   IconDisplayText,
   IconContainer,
   BuyEntireKitTitle,
   KitSpecificationsContainer,
   HorizontalGradient
} from './styledComponents'

class BuyEntireKitCard extends Component {
   render() {
      return (
         <BuyEntireKitCardContainer>
            <BuyEntireKitTitle>BUY ENTIRE KIT</BuyEntireKitTitle>
            <HorizontalGradient />
            <KitSpecificationsContainer>
               <IconContainer>
                  <IbCricketIcon />
                  <IconDisplayText>
                     IBC Game with 5 user profiles
                  </IconDisplayText>
               </IconContainer>
               <IconContainer>
                  <OculusQuest2Icon height={70} />
                  <IconDisplayText>Custom Designed Bat</IconDisplayText>
               </IconContainer>
               <IconContainer>
                  <OculusQuest2Icon height={70} />
                  <IconDisplayText>Oculus Quest 2</IconDisplayText>
               </IconContainer>
            </KitSpecificationsContainer>
            <SkewedButton
               displayText={'SIGN IN WITH FACEBOOK TO CONTINUE'}
               disabled={false}
               link=''
               onClick={() => null}
            />
         </BuyEntireKitCardContainer>
      )
   }
}

export default BuyEntireKitCard
