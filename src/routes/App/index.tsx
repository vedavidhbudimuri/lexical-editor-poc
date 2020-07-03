import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'

import i18n from '../../common/i18n'

import stores from '../../stores'

import Routes from '../index'

const App: React.FC = () => (
   <Provider {...stores}>
      <I18nextProvider i18n={i18n}>
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
      </I18nextProvider>
   </Provider>
)

export default App
