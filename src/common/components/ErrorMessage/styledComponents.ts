import styled from 'styled-components'

import {
   BaseRobotoText,
   Typo12PinkishOrangeRoboto
} from '../../../styleGuide/Typos'

export const ErrorView = styled.div`
   flex-direction: row;
   margin-top: 3px;
   margin-left: 3px;
`

export const ErrorText = styled(BaseRobotoText)`
   line-height: 2.03;
   letter-spacing: 0.11px;
`

export const ErrorMessageContainer = styled(Typo12PinkishOrangeRoboto)`
   line-height: 2.03;
   letter-spacing: 0.11px;
   pointer-events: none;
`
