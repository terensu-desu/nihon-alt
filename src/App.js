import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom' //normally BrowserRouter but can also be HashRouter
import NihonALT from './components/NihonALT'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			english: true
		}
	}

	handleLangUpdate(e) {
    this.setState({
      english: !this.state.english
    })
    e.preventDefault()
  }

  render() {
    return (
      <Router>
      	<NihonALT english={ this.state.english } updateLang={ this.handleLangUpdate.bind(this) }/>
      </Router>
    )
  }
}

export default App
