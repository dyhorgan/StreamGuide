import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div className="grey lighten-2">
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
