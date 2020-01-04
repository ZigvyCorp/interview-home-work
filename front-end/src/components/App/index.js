import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from '../../store'
import Header from '../Header'
import CustomBody from '../CustomBody'


function App() {
  return (
  	<Provider store={store}>
  	  <Router>
  	  	<div className="App">
          <Header />
          <CustomBody />
      </div>
  	  </Router>
  	</Provider>
  )
}

export default App
