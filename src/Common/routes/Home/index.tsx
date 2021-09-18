import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import 'twin.macro'
import { Button, LensProvider } from '@ib/nebula-system'

import { tailwindContainerCSS, TailwindContainer } from './styledComponents'
@observer
class Home extends Component {
   render(): React.ReactElement {
      return (
         <div>
            <h2>Home</h2>
            <Link to='/counter'>
               <p>Counter</p>
            </Link>
            <TailwindContainer
               css={[
                  tailwindContainerCSS
                  /* Combine regular css and tailwind styles within backticks */
               ]}
            >
               <div tw='flex flex-col justify-center h-full space-y-5'>
                  <p className='bg-green-500'>Tailwind Column Item</p>
                  <p>Tailwind Column Item</p>
               </div>
            </TailwindContainer>
            <LensProvider>
               <Button variant='positive'>Positive</Button>
            </LensProvider>
         </div>
      )
   }
}

export default Home
