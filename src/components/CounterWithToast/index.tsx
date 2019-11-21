import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

@observer
class CounterWithToast extends Component {
   @observable count: number = 0

   handleClick = () => {
      this.count = this.count + 1
      if (this.count >= 5) {
         toast(`Count has reached ${this.count}. Setting count back to 0`)
         this.count = 0
      }
   }

   render() {
      return (
         <div>
            <h1>{this.count}</h1>
            <button onClick={this.handleClick}>Click me!</button>
            <ToastContainer
               position='top-right'
               autoClose={1000}
               hideProgressBar={true}
               newestOnTop={true}
               closeOnClick
               rtl={false}
               draggable
               pauseOnHover
            />
            <Link to='/'>
               <p>Home</p>
            </Link>
         </div>
      )
   }
}

export default CounterWithToast
