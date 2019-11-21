import * as React from 'react'
import ReactLoader from 'react-loader-spinner'
interface ILoaderProps {
   height: number
   width: number
   type: string
   color: string
}

class Loader extends React.Component<ILoaderProps> {
   static defaultProps = {
      type: 'Oval',
      color: '#00BFFF',
      height: 100,
      width: 100
   }
   constructor(props: ILoaderProps) {
      super(props)
   }
   render() {
      const { height, width, type, color } = this.props
      return (
         <ReactLoader type={type} color={color} height={height} width={width} />
      )
   }
}

export default Loader
