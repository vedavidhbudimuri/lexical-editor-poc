import React, { Component } from 'react'

interface Props {
   width: number
   height: number
   fill: string
   className?: string
}
class ReactSelectDropDownArrow extends Component<Props> {
   static defaultProps = {
      width: 12,
      height: 8,
      fill: '#ADADAD'
   }

   render() {
      const { width, height, fill, className } = this.props

      return (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 12 8'
            className={className}
         >
            <g fill='none' fillRule='evenodd'>
               <path
                  fill={fill}
                  d='M1.41 7.41L6 2.83l4.59 4.58L12 6 6 0 0 6z'
               />
               <path d='M18 16H-6V-8h24z' />
            </g>
         </svg>
      )
   }
}

export default ReactSelectDropDownArrow
