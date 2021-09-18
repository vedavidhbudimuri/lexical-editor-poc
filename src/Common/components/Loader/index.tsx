import * as React from 'react'
import ReactLoader from 'react-loader-spinner'

import colors from '../../themes/Colors'

interface LoaderProps {
   height?: number
   width?: number
   type?: string
   color?: string

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   className?: any
}

class Loader extends React.Component<LoaderProps> {
   static defaultProps = {
      type: 'Oval',
      color: colors.primaryColor,
      height: 30,
      width: 30
   }

   render(): JSX.Element {
      const { height, width, type, color, ...other } = this.props
      return (
         <ReactLoader
            type={type}
            color={color}
            height={height}
            width={width}
            {...other}
         />
      )
   }
}

export default Loader
