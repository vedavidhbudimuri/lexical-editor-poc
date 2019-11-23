import React from 'react'
import { ToastContainer } from 'react-toastify'

import Routes from '../index'

const App: React.FC = () => {
   return (
      <div>
         <Routes />
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
      </div>
   )
}

export default App
