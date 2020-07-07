import styled from 'styled-components'

import Colors from '../../themes/Colors'

export const BaseText = styled.span`
   font-family: 'Roboto';
`
export const BaseRobotoText = styled(BaseText)`
   font-family: 'Roboto';
`

export const BaseRobotoMediumText = styled(BaseRobotoText)`
   font-weight: 500;
`

export const BasePoppinsText = styled(BaseText)`
   font-family: 'Poppins';
`

export const Typo12BlackRoboto = styled(BaseRobotoText)`
   font-size: 12px;
   color: ${Colors.black};
`

export const Typo12PinkishOrangeRoboto = styled(BaseRobotoText)`
   font-size: 12px;
   color: ${Colors.pinkishOrange};
`

export const Typo14DarkRR = styled(BaseRobotoText)`
   font-size: 14px;
   color: ${Colors.dark};
`

export const Typo16DuskRR = styled(BaseRobotoText)`
   font-size: 16px;
   color: ${Colors.dusk};
`

export const Typo26BlackRoboto = styled(BaseRobotoText)`
   font-size: 26px;
`

export const Typo16BlackPoppins = styled(BasePoppinsText)`
   font-size: 16px;
   color: ${Colors.black};
`
