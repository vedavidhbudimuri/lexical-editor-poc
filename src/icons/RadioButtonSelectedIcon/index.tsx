import React from 'react'

function RadioButtonSelectedIcon() {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         xmlnsXlink='http://www.w3.org/1999/xlink'
         width='18'
         height='19'
         viewBox='0 0 18 19'
      >
         <defs>
            <path id='a' d='M0 0h20v20H0z'></path>
            <linearGradient id='e' x1='50%' x2='50%' y1='3.117%' y2='100%'>
               <stop offset='0%' stopColor='#FFF'></stop>
               <stop offset='100%' stopColor='#617985'></stop>
            </linearGradient>
            <circle id='d' cx='10' cy='10' r='8'></circle>
            <filter
               id='c'
               width='118.8%'
               height='125%'
               x='-9.4%'
               y='-9.4%'
               filterUnits='objectBoundingBox'
            >
               <feMorphology
                  in='SourceAlpha'
                  operator='dilate'
                  radius='1'
                  result='shadowSpreadOuter1'
               ></feMorphology>
               <feOffset
                  dy='1'
                  in='shadowSpreadOuter1'
                  result='shadowOffsetOuter1'
               ></feOffset>
               <feComposite
                  in='shadowOffsetOuter1'
                  in2='SourceAlpha'
                  operator='out'
                  result='shadowOffsetOuter1'
               ></feComposite>
               <feColorMatrix
                  in='shadowOffsetOuter1'
                  values='0 0 0 0 0.0863 0 0 0 0 0.1137 0 0 0 0 0.1451 0 0 0 0.05 0'
               ></feColorMatrix>
            </filter>
         </defs>
         <g fill='none' fillRule='evenodd' transform='translate(-1 -1)'>
            <mask id='b' fill='#fff'>
               <use xlinkHref='#a'></use>
            </mask>
            <g mask='url(#b)'>
               <use fill='#000' filter='url(#c)' xlinkHref='#d'></use>
               <use fill='#FFF' xlinkHref='#d'></use>
               <circle
                  cx='10'
                  cy='10'
                  r='8.5'
                  fill='url(#e)'
                  fillOpacity='0.04'
                  stroke='#2D7FFF'
               ></circle>
            </g>
            <circle
               cx='10'
               cy='10'
               r='4'
               fill='#2D7FFF'
               mask='url(#b)'
            ></circle>
         </g>
      </svg>
   )
}

export default RadioButtonSelectedIcon
