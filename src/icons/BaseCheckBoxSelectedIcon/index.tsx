import React from 'react'

interface Props {
   width: number
   height: number
}

const BaseCheckBoxSelectedIcon = (props: Props) => (
   <svg width={props.width} height={props.height}>
      <defs>
         <path id='selected_check_svg__a' d='M0 0h20v20H0z' />
      </defs>
      <g fill='none' fillRule='evenodd' transform='translate(-2 -2)'>
         <mask id='selected_check_svg__b' fill='#fff'>
            <use xlinkHref='#selected_check_svg__a' />
         </mask>
         <rect
            width={16}
            height={16}
            x={2}
            y={2}
            fill='#2D7FFF'
            mask='url(#selected_check_svg__b)'
            rx={3}
         />
         <path
            fill='#FFF'
            d='M8.315 13.858l-3.182-3.417a.506.506 0 010-.684l.643-.682a.437.437 0 01.642 0l2.219 2.392L13.58 6.14a.437.437 0 01.643 0l.643.684a.504.504 0 010 .683l-5.91 6.35a.437.437 0 01-.642 0'
            mask='url(#selected_check_svg__b)'
         />
      </g>
   </svg>
)

BaseCheckBoxSelectedIcon.defaultProps = {
   width: 16,
   height: 16
}

export default BaseCheckBoxSelectedIcon
