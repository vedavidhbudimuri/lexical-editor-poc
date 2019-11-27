import React from 'react'
import { storiesOf } from '@storybook/react'

import colors from '../../../themes/Colors'

import HorizontalScrollList from '.'

const list = [
   { name: 'item1' },
   { name: 'item2' },
   { name: 'item3' },
   { name: 'item4' },
   { name: 'item5' },
   { name: 'item6' },
   { name: 'item7' },
   { name: 'item8' },
   { name: 'item9' },
   { name: 'item10' },
   { name: 'item11' },
   { name: 'item12' },
   { name: 'item13' },
   { name: 'item14' },
   { name: 'item15' },
   { name: 'item16' },
   { name: 'item17' },
   { name: 'item18' },
   { name: 'item19' },
   { name: 'item20' }
]

interface MenuItemProps {
   text: string
   selected: boolean
   key: string
}

function MenuItem(props: MenuItemProps) {
   const { text, selected } = props
   return (
      <div
         className={`menu-item ${selected ? 'active' : ''}`}
         style={{
            height: 35,
            width: 100,
            margin: '5px',
            border: `1px solid ${colors.primaryColor}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         {text}
      </div>
   )
}

interface ArrowProps {
   text: string
   className: string
}

function Arrow(props: ArrowProps) {
   const { className, text } = props
   return <div className={className}>{text}</div>
}

const selected = 'item1'

class HorizontalScroller extends React.Component {
   constructor(props) {
      super(props)
      // call it again if items count changes
   }

   state = {
      selected
   }

   getMenu = (list, selected) =>
      list.map(el => {
         const { name } = el
         return <MenuItem text={name} key={name} selected={selected} />
      })

   onSelect = key => {
      this.setState({ selected: key })
   }

   arrowLeft = () => <Arrow text='<' className='arrow-prev' />
   arrowRight = () => <Arrow text='>' className='arrow-next' />

   render() {
      const { selected } = this.state
      // Create menu from items
      const menu = this.getMenu(list, selected)
      return (
         <div className='App'>
            <HorizontalScrollList
               data={menu}
               arrowLeft={this.arrowLeft()}
               arrowRight={this.arrowRight()}
               selected={selected}
               onSelect={this.onSelect}
            />
         </div>
      )
   }
}

storiesOf('Component Guide', module).add(
   'HorizontalScrollList Component',
   () => <HorizontalScroller />
)
