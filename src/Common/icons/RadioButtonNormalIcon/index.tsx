import React from 'react'

interface Props {
   width: number
   height: number
}

const RadioButtonNormalIcon = (props: Props) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={props.width}
      height={props.height}
      viewBox='0 0 16 16'
      {...props}
   >
      <defs>
         <path id='a' d='M0 0h20v20H0z'></path>
      </defs>
      <g fill='none' fillRule='evenodd' transform='translate(-2 -2)'>
         <mask id='b' fill='#fff'>
            <use xlinkHref='#a'></use>
         </mask>
         <circle
            cx='10'
            cy='10'
            r='7.5'
            fill='#F5F6FF'
            stroke='#C4CDD5'
            mask='url(#b)'
         ></circle>
      </g>
   </svg>
)

RadioButtonNormalIcon.defaultProps = {
   width: 16,
   height: 16
}

export default RadioButtonNormalIcon
