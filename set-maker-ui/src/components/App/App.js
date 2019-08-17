import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { I18n } from 'react-polyglot'

import './App.css'

import { AppBar } from '../AppBar'
import { Login } from '../Login'

const locale = window.locale || 'fr'
const messages = require(`../../messages/${locale}.json`)

function App() {
  return (
    <I18n messages={messages}>
      <Router className='App'>
        <AppBar />
        <Route path='/login' component={Login} />
      </Router>
    </I18n>
  )
}

export default App
