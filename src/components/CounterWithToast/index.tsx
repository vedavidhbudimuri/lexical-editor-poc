import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

import { counterStore } from '../../stores'

@observer
class CounterWithToast extends Component {
   handleIncrement = () => {
      counterStore.incrementCounter()
      toast(`Count has been incremented by 1`)
   }

   handleDecrement = () => {
      if (counterStore.count !== 0) {
         counterStore.decrementCounter()
         toast(`Count has been decremented by 1`)
      } else {
         toast(`Count is 0 and it can't be decremented`)
      }
   }

   render() {
      const { count } = counterStore
      return (
         <div>
            <h1>{count}</h1>
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
