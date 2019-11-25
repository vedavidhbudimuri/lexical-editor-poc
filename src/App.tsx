import React from 'react'
import { withTranslation } from 'react-i18next'

import logo from './logo.svg'
import './App.css'

type AppProps = { t: (word: string) => string }

const App = ({ t }: AppProps) => (
   <div className='App'>
      <header className='App-header'>
         <img src={logo} className='App-logo' alt='logo' />
         <p>
            Edit <code>src/App.tsx</code> and save to reload.
         </p>
         <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
         >
            {t('app.learn_react')}
         </a>
      </header>
   </div>
)
export default withTranslation()(App)
