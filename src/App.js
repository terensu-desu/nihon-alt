import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom' //normally BrowserRouter but can also be HashRouter
import NihonALT from './components/NihonALT'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
      	<NihonALT />
      </Router>
    )
  }
}

export default App
