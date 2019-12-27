import styled from 'styled-components'

import { Typo12PinkishOrangeRoboto } from '../../../styleGuide/Typos'
import { mobile } from '../../../utils/MixinUtils'

export const MainContainer = styled.div`
   ${mobile} {
      margin-top: 8px;
   }
`

export const RadioGroupContainer = styled.div``

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
