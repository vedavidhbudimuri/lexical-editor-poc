import * as React from 'react'

import { ReactImage } from './styledComponents'

function Image(props) {
   return <ReactImage {...props} draggable={false} />
}

export default Image
