import React, { Component } from 'react'

interface Props {
   width?: number
   height?: number
   fill?: string
}

class CloseIcon extends Component<Props> {
   static defaultProps = {
      width: 12,
      height: 12,
      fill: `#FFF`
   }

   render() {
      const { width, height, fill } = this.props

      return (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 12 12'
         >
            <g fill='none' fillRule='evenodd' opacity='.8'>
               <path
                  fill={fill}
                  fillRule='nonzero'
                  d='M11.25 1.808L10.193.75 6 4.942 1.808.75.75 1.808 4.942 6 .75 10.193l1.058 1.057L6 7.057l4.193 4.193 1.057-1.057L7.057 6z'
               />

               <path d='M-3-3h18v18H-3z' />
            </g>
         </svg>
      )
   }
}

export default CloseIcon
