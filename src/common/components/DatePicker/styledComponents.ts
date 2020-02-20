import styled from 'styled-components'

import { mobile } from '../../../utils/MixinUtils'

export const DateContainer = styled('div')`
   width: 100%;
   ${mobile} {
      margin-top: 8px;
   }
`
