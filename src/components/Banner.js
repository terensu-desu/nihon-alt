import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
  	const rText = [];
  	rText[0] = "The best ALTs.... in the world!";
    rText[1] = "Affecting. Leading. Teaching.";
    rText[2] = "Globalization, in the classroom.";
    rText[3] = "For all your English teaching needs.";
    rText[4] = "朝飯前!";
    rText[5] = "英語放題。";
    rText[6] = "RPS or RSP, you decide.";
    rText[7] = "Otsukaresama desu!";
    rText[8] = "Let's speak English!";
		const i = Math.floor(rText.length * Math.random());
    return (
    	<div className="container-fluid nihon-banner">
  			<div className="row">
          <div className="col s12">
    				<h2>Nihon <span>ALT</span></h2>
    				<h3>{ rText[i] }</h3>
          </div>
  			</div>
      </div>
    )
  }
}