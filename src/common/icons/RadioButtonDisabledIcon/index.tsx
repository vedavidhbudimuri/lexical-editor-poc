import React from 'react'

interface Props {
   width: number
   height: number
}

const RadioButtonDisabledIcon = (props: Props) => (
   <svg width={props.width} height={props.height}>
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

RadioButtonDisabledIcon.defaultProps = {
   width: 16,
   height: 16
}

export default RadioButtonDisabledIcon
