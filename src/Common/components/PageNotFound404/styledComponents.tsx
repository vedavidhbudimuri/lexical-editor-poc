import styled from 'styled-components'

import Colors from '../../themes/Colors'
import { mobile, tablet } from '../../utils/MixinUtils'
import { BaseRobotoText, BaseRobotoMediumText } from '../../styleGuide/Typos'

export const Container = styled('div')``

export const TopSectionBackground = styled('div')`
   background-color: ${Colors.pageNotFoundTopBgColor};
   background-image: url('https://s3-ap-southeast-1.amazonaws.com/ibhubs-media-files/404-page/404-bg-curve.png');
   height: calc(100vh - (100vh - 460px) / 2);
   width: 100%;
   display: flex;
   ${mobile} {
      height: 340px;
   }
`

export const TopSection = styled('div')`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-end;
   width: 59.75em;
   margin: 0 auto;
   ${tablet} {
      width: 92%;
   }
   ${mobile} {
      justify-content: space-around;
   }
`

export const InfoSection = styled('div')`
   background-color: ${Colors.pageNotFoundInfoSectionBgColor};
   font-size: 16px;
   width: 360px;
   padding-left: 33px;
   padding-right: 33px;
   padding-top: 2.5em;
   padding-bottom: 1.5em;
   ${mobile} {
      display: none;
   }
`

export const InfoMobileSection = styled('div')`
   ${mobile} {
      display: block;
      background-color: ${Colors.pageNotFoundInfoSectionBgColor};
      width: 90%;
      font-size: 16px;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 2.5em;
      padding-bottom: 1.5em;
      margin-left: auto;
      margin-right: auto;
   }
   display: none;
`

export const ImageSection = styled('img')`
   margin-bottom: calc(447px - 510px);
   ${mobile} {
      width: 125px;
      height: auto;
      margin-bottom: -32px;
   }
`

export const BottomSection = styled('div')`
   background-color: ${Colors.pageNotFoundBottomBgColor};
   height: calc((100vh - 460px) / 2);
   width: 100%;
   ${mobile} {
      height: calc(100vh - 455px);
      padding-top: 55px;
      padding-bottom: 60px;
   }
`

export const Heading = styled(BaseRobotoText)`
   font-size: 36px;
   font-weight: 300;
   letter-spacing: -0.4px;
   color: ${Colors.pageNotFoundText};
   margin-bottom: 5px;
   ${mobile} {
      display: none;
   }
`

export const MobileHeading = styled(BaseRobotoText)`
   ${mobile} {
      display: block;
      font-size: 24px;
      line-height: normal;
      letter-spacing: -0.3px;
      color: ${Colors.pageNotFoundText};
      margin-bottom: 4px;
   }
   display: none;
`

export const SecondHeading = styled(BaseRobotoText)`
   font-size: 22px;
   line-height: normal;
   letter-spacing: normal;
   color: ${Colors.pageNotFoundText};
   margin-bottom: 20px;
   ${mobile} {
      display: none;
   }
`

export const MobileSubHeading = styled(BaseRobotoMediumText)`
   ${mobile} {
      display: block;
      font-size: 16px;
      letter-spacing: normal;
      color: ${Colors.pageNotFoundText};
      margin-bottom: 65%;
   }
   display: none;
`

export const Description = styled(BaseRobotoText)`
   font-size: 15px;
   line-height: 1.47;
   color: ${Colors.pageNotFoundText};
   margin-bottom: 30px;
   ${mobile} {
      font-weight: 500;
      line-height: 1.47;
      color: ${Colors.pageNotFoundText};
   }
`

export const HomeButton = styled(BaseRobotoText)`
   font-size: 16px;
   line-height: 1.43;
   letter-spacing: normal;
   color: ${Colors.white};
   text-decoration: none;
   background: ${Colors.mango};
   padding: 5px 10px;
   border-radius: 3px;
   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19);
`
