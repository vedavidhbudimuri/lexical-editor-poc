import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'mobx-react'

import stores from '../../stores'
import Routes from '../index'

const App: React.FC = () => {
   return (
      <Provider {...stores}>
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
      </Provider>
   )
}

export default App
