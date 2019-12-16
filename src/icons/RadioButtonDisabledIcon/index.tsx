import React from 'react'

const RadioButtonDisabledIcon = props => (
   <svg width={16} height={16} {...props}>
      <defs>
         <path id='disabled_radio_svg__a' d='M0 0h20v20H0z' />
      </defs>
      <g fill='none' fillRule='evenodd' transform='translate(-2 -2)'>
         <mask id='disabled_radio_svg__b' fill='#fff'>
            <use xlinkHref='#disabled_radio_svg__a' />
         </mask>
         <circle
            cx={10}
            cy={10}
            r={7.5}
            fill='#F5F6F7'
            stroke='#DFE1E6'
            mask='url(#disabled_radio_svg__b)'
         />
      </g>
   </svg>
)

export default RadioButtonDisabledIcon
