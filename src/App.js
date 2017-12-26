import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom' //normally BrowserRouter but can also be HashRouter
import NihonALT from './components/NihonALT';

export default class App extends Component {
	constructor() {
		super();
		this.state = { english: true };
    this.handleLanguageUpdate = this.handleLanguageUpdate.bind(this);
	}
  // Function toggle English language on and off, which will determine what language data the store sends.
	handleLanguageUpdate(e) {
    this.setState({ english: !this.state.english });
    e.preventDefault();
  }

  render() {
    return (
      <Router>
      	<NihonALT english={this.state.english} updateLanguage={this.handleLanguageUpdate}/>
      </Router>
    )
  }
}