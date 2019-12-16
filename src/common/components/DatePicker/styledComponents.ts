import styled from 'styled-components'

import { mobile } from '../../../utils/MixinUtils'

export const DateContainer = styled('div')`
   margin-top: 20px;
   width: 100%;
   ${mobile} {
      margin-top: 8px;
   }
`
