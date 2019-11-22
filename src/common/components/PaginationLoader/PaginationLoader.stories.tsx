import React from 'react'
import { storiesOf } from '@storybook/react'

import colors from '../../../themes/Colors'

import Loader from '../Loader'

import PaginationLoader from '.'

const style = {
   height: 30,
   border: `1px solid ${colors.primaryColor}`,
   color: colors.primaryColor,
   margin: 6,
   padding: 8,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center'
}
class InfinitePaginationLoader extends React.Component {
   state = {
      items: Array.from({ length: 20 }),
      hasMore: true
   }

   fetchMoreData = () => {
      if (this.state.items.length >= 100) {
         this.setState({ hasMore: false })
         return
      }
      // a fake async api call like which sends
      // 20 more records in 1.0 secs
      setTimeout(() => {
         this.setState({
            items: this.state.items.concat(Array.from({ length: 20 }))
         })
      }, 1000)
   }

   renderLoader = () => {
      return (
         <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Loader height={60} width={60} />
         </div>
      )
   }
   render() {
      return (
         <PaginationLoader
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={this.renderLoader()}
            endMessage={
               <p style={{ textAlign: 'center', color: colors.primaryColor }}>
                  <b>Yay! You have seen it all</b>
               </p>
            }
         >
            {this.state.items.map((i, index) => (
               <div style={style} key={index}>
                  Item => {index}
               </div>
            ))}
         </PaginationLoader>
      )
   }
}

storiesOf('Component Guide', module).add('PaginationLoader Component', () => (
   <InfinitePaginationLoader />
))
