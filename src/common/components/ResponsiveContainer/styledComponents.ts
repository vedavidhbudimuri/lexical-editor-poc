import styled from 'styled-components'

import { mobile, tablet, mdDesktop } from '../../../utils/MixinUtils'

//TODO: Fix these values based on the project requirements.
export const MainContainer = styled.div`
   width: 1110px;
   margin-right: auto;
   margin-left: auto;
   ${mobile} {
      width: 93.75%;
   }
   ${tablet} {
      width: 90%;
   }
   ${mdDesktop} {
      width: 90%;
   }
`
