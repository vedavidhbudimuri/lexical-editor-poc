import styled from 'styled-components'

import Colors from '../../../themes/Colors'
import { Typo16BlackPoppins } from '../../../styleGuide/Typos'
import { mobile } from '../../../utils/MixinUtils'

import Button from '../Button'

export const YesButton = styled(Button)`
   width: 69px;
   border-radius: 5px;
`

export const NoButton = styled(Button)`
   width: 69px;
   margin-right: 20px;
   border-radius: 5px;
`

export const Container = styled.div`
   padding: 20px;
   margin: 20px;
   min-width: 400px;
   background-color: ${Colors.white};
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   ${mobile} {
      min-width: unset;
   }
`

export const ButtonsContainer = styled.div`
   margin-top: 30px;
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   align-items: flex-end;
`

export const Message = styled(Typo16BlackPoppins)``

export const MainContainer = styled.div`
   position: fixed;
   z-index: 100000000000000;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(9, 15, 24, 0.5);
   display: flex;
   align-items: center;
   justify-content: center;
`
