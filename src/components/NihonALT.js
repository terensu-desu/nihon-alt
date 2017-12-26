import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Banner from './Banner'
import Navbar from './Navbar'
import Home from './Home'
import Pages from './Pages'

export default class NihonALT extends Component {
  render() {
    return (
    	<div>
        <Navbar english={this.props.english} updateLanguage={this.props.updateLanguage} />
        <Banner />
        <Route exact path="/" component={Home} />
        <Route path="/:loc/:id" component={Pages} />
        <div className="footer-copyright">
          <p className="center">Created by Terence Mangram using React, MaterializeCSS, and jQuery.</p>
        </div>
      </div>
    )
  }
}