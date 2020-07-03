import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

import CounterStore from '../../common/stores/CounterStore'

interface CounterWithToastProps {
   counterStore: CounterStore
}

@inject('counterStore')
@observer
class CounterWithToast extends Component<CounterWithToastProps> {
   handleIncrement = () => {
      const { counterStore } = this.props
      counterStore.incrementCounter()
      toast(`Count has been incremented by 1`)
   }

   handleDecrement = () => {
      const { counterStore } = this.props
      if (counterStore.count !== 0) {
         counterStore.decrementCounter()
         toast(`Count has been decremented by 1`)
      } else {
         toast(`Count is 0 and it can't be decremented`)
      }
   }

   render() {
      const { counterStore } = this.props
      return (
         <div>
            <h1>{counterStore.count}</h1>
            <button onClick={this.handleIncrement}>+</button>
            <button onClick={this.handleDecrement}>-</button>

            <Link to='/'>
               <p>Home</p>
            </Link>
         </div>
      )
   }
}

export default CounterWithToast
