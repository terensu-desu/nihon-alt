import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div id="nihon-nav">
      	<nav>
      		<div className="nav-wrapper">
      			<Link to="/" className="brand-logo">Nihon <span>ALT</span></Link>
            <a href="#!" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
      			<ul id="nav-mobile" className="right hide-on-med-and-down">
      				<li><a className="de-link">Materials:</a></li>
      				<li><a className="dropdown-button" data-beloworigin="true" data-activates="nh1">NH1<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
      				<li><a className="dropdown-button" data-beloworigin="true" data-activates="nh2">NH2<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
              <li><a className="dropdown-button" data-beloworigin="true" data-activates="nh3">NH3<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
              <li><a className="dropdown-button" data-beloworigin="true" data-activates="sn">Special Needs<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
              <li className="lang-switch"><a onClick={this.props.updateLanguage}>Switch to {this.props.english ? '日本語' : 'English'}</a></li>
      			</ul>

            <ul className="side-nav center" id="mobile-nav">
              <li><a className="de-link">Materials:</a></li>
              <li><a className="dropdown-button" data-beloworigin="true" data-activates="nh1m">NH1<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
              <li><a className="dropdown-button" data-beloworigin="true" data-activates="nh2m">NH2<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
              <li><a className="dropdown-button" data-beloworigin="true" data-activates="nh3m">NH3<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
              <li><a className="dropdown-button" data-beloworigin="true" data-activates="snm">Special Needs<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
              <li className="lang-switch"><a onClick={this.props.updateLanguage}>Switch to {this.props.english ? '日本語' : 'English'}</a></li>
            </ul>
      		</div>
        </nav>
        <ul id="nh1" className="dropdown-content">
          <li><Link to="/nh1u1/lp">Unit 1</Link></li>
          <li><Link to="/nh1u2/lp">Unit 2</Link></li>
          <li><Link to="/nh1u3/lp">Unit 3</Link></li>
          <li><Link to="/nh1u4/lp">Unit 4</Link></li>
          <li><Link to="/nh1u5/lp">Unit 5</Link></li>
          <li><Link to="/nh1u6/lp">Unit 6</Link></li>
          <li><Link to="/nh1u7/lp">Unit 7</Link></li>
          <li><Link to="/nh1u8/lp">Unit 8</Link></li>
          <li><Link to="/nh1u9/lp">Unit 9</Link></li>
          <li><Link to="/nh1u10/lp">Unit 10</Link></li>
          <li><Link to="/nh1u11/lp">Unit 11</Link></li>
          <li><Link to="/nh1dsplus/ds1">Extras</Link></li>
        </ul>
        <ul id="nh2" className="dropdown-content">
          <li><Link to="/nh2u1/lp">Unit 1</Link></li>
          <li><Link to="/nh2u2/lp">Unit 2</Link></li>
          <li><Link to="/nh2u3/lp">Unit 3</Link></li>
          <li><Link to="/nh2u4/lp">Unit 4</Link></li>
          <li><Link to="/nh2u5/lp">Unit 5</Link></li>
          <li><Link to="/nh2u6/lp">Unit 6</Link></li>
          <li><Link to="/nh2u7/lp">Unit 7</Link></li>
          <li><Link to="/nh2dsplus/ds1">Extras</Link></li>
        </ul>
        <ul id="nh3" className="dropdown-content">
          <li><Link to="/nh3u1/lp">Unit 1</Link></li>
          <li><Link to="/nh3u2/lp">Unit 2</Link></li>
          <li><Link to="/nh3u3/lp">Unit 3</Link></li>
          <li><Link to="/nh3u4/lp">Unit 4</Link></li>
          <li><Link to="/nh3u5/lp">Unit 5</Link></li>
          <li><Link to="/nh3u6/lp">Unit 6</Link></li>
          <li><Link to="/nh3dsplus/ds1">Extras</Link></li>
        </ul>
        <ul id="sn" className="dropdown-content">
          <li><Link to="/spc1/food">Picture Cards</Link></li>
          <li><Link to="/spc2/lp">Worksheets</Link></li>
          <li><Link to="/spc3/card">Games</Link></li>
          <li><Link to="/spc4/summer">Seasonal</Link></li>
        </ul>
        
        <ul id="nh1m" className="dropdown-content">
          <li><Link to="/nh1u1/lp">Unit 1</Link></li>
          <li><Link to="/nh1u2/lp">Unit 2</Link></li>
          <li><Link to="/nh1u3/lp">Unit 3</Link></li>
          <li><Link to="/nh1u4/lp">Unit 4</Link></li>
          <li><Link to="/nh1u5/lp">Unit 5</Link></li>
          <li><Link to="/nh1u6/lp">Unit 6</Link></li>
          <li><Link to="/nh1u7/lp">Unit 7</Link></li>
          <li><Link to="/nh1u8/lp">Unit 8</Link></li>
          <li><Link to="/nh1u9/lp">Unit 9</Link></li>
          <li><Link to="/nh1u10/lp">Unit 10</Link></li>
          <li><Link to="/nh1u11/lp">Unit 11</Link></li>
          <li><Link to="/nh1dsplus/ds1">Extras</Link></li>
        </ul>
        <ul id="nh2m" className="dropdown-content">
          <li><Link to="/nh2u1/lp">Unit 1</Link></li>
          <li><Link to="/nh2u2/lp">Unit 2</Link></li>
          <li><Link to="/nh2u3/lp">Unit 3</Link></li>
          <li><Link to="/nh2u4/lp">Unit 4</Link></li>
          <li><Link to="/nh2u5/lp">Unit 5</Link></li>
          <li><Link to="/nh2u6/lp">Unit 6</Link></li>
          <li><Link to="/nh2u7/lp">Unit 7</Link></li>
          <li><Link to="/nh2dsplus/ds1">Extras</Link></li>
        </ul>
        <ul id="nh3m" className="dropdown-content">
          <li><Link to="/nh3u1/lp">Unit 1</Link></li>
          <li><Link to="/nh3u2/lp">Unit 2</Link></li>
          <li><Link to="/nh3u3/lp">Unit 3</Link></li>
          <li><Link to="/nh3u4/lp">Unit 4</Link></li>
          <li><Link to="/nh3u5/lp">Unit 5</Link></li>
          <li><Link to="/nh3u6/lp">Unit 6</Link></li>
          <li><Link to="/nh3dsplus/ds1">Extras</Link></li>
        </ul>
        <ul id="snm" className="dropdown-content">
          <li><Link to="/spc1/food">Picture Cards</Link></li>
          <li><Link to="/spc2/lp">Worksheets</Link></li>
          <li><Link to="/spc3/card">Games</Link></li>
          <li><Link to="/spc4/summer">Seasonal</Link></li>
        </ul>
      </div>
    )
  }
}