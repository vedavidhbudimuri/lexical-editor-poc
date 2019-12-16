import styled from 'styled-components'

import { Typo12PinkishOrangeRoboto } from '../../../styleGuide/Typos'

export const MainContainer = styled.div`
   width: 100%;
`

export const RadioButtonsContainer = styled.div`
   display: flex;
   margin-bottom: 0px;
   width: 100% !important;
   flex-direction: row;
   justify-content: space-between;
   flex-direction: row;
`

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
