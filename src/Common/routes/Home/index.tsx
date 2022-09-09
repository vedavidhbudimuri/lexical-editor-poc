import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import 'twin.macro'
import { Button, LensProvider } from '@ib/nebula-system'

import { tailwindContainerCSS, TailwindContainer } from './styledComponents'
import Editor from '../../../Editor/Components/Editor/Editor'
import BasicEditor from '../../../Editor/Components/BasicEditor/BasicEditor'
@observer
class Home extends Component {
   render(): React.ReactElement {
      return (
         <div>
            <Editor />
            <BasicEditor />
         </div>
      )
   }
}

export default Home
