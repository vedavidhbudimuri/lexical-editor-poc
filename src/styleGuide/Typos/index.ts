import styled from 'styled-components'

import Colors from '../../themes/Colors'

export const BaseText = styled.span`
   font-family: 'Roboto';
`
export const BaseRobotoText = styled(BaseText)`
   font-family: 'Roboto';
`

export const Typo12BlackRoboto = styled(BaseRobotoText)`
   font-size: 12px;
`

export const Typo12PinkishOrangeRoboto = styled(BaseRobotoText)`
   font-size: 12px;
   color: ${Colors.pinkishOrange};
`
