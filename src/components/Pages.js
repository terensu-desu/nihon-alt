import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageDataStore from '../stores/PageDataStore';
import * as PageStoreActions from '../actions/PageStoreActions';

export default class Pages extends Component {	
	constructor() {
		super();
    this.state = {
      pageData: {
        lp: [],
        p1: [],
        p2: [],
        p3: [],
        p4: [],
        p5: [],
        p6: [],
        rv: [],
        ds1: [],
        ds2: [],
        ds3: [],
        ds4: [],
        ds5: [],
        ds6: [],
        food: [],
        activities: [],
        family: [],
        animals: [],
        things: [],
        easy: [],
        adv: [],
        game: [],
        card: [],
        team: [],
        summer: [],
        autumn: [],
        winter: [],
        spring: [],
      }
    };
	}

  componentDidMount() {
    PageStoreActions.loadPage(this.props.match.params.loc);
    this.setState({ pageData: PageDataStore.pageData });
  }

  componentWillReceiveProps(nextProps) {
    PageStoreActions.loadPage(nextProps.match.params.loc);
    this.setState({ pageData: PageDataStore.pageData });
  }
  
  // load page data (file titles, image, download link, etc.) by taking the data and mapping it to a template.
  loadPage(id) {
    //put data through a map
    let itemData = this.state.pageData[id];
    let displayData = itemData.map((item, i) => {
      return (
        <div className="col s12 l6 display-linebreak" key={i}>
          <div id={"imgModal" + i} className="img-modal">
            <i onClick={() => {document.getElementById("imgModal"+i).style.display="none"}} className="material-icons img-close">close</i>
            <img className="img-modal-content" id={ "modal-img" + i} src={item.image} alt="expanded view" />
            <div id="caption">{item.title}</div>
          </div>
          <div className="card horizontal">
            <div className="card-image worksheet-img">
              <img onClick={() => {document.getElementById("imgModal"+i).style.display="block"}} src={item.image} alt="preview" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5>{item.title}</h5>
                <p>{item.instructions}</p>
              </div>
              <div className="card-action">
                <a href={item.download}>Download this file</a>
              </div>
            </div>
          </div>
          
        </div>
      )
    })
    return displayData;
  }

  // load links onto the page to match the current location's info.
  loadLinks() {
    let data = this.state.pageData;
    let dataKeys = Object.keys(data);
    function checkActive(props, link) {
      if (props === link) {
        return "active-page-btn"
      }
      return "not-active"
    };
    function checkName(link) {
      switch(link) {
        case "lp":{
          return "Lesson Plans"
        }
        case "p1":{
          return "Part 1"
        }
        case "p2":{
          return "Part 2"
        }
        case "p3":{
          return "Part 3"
        }
        case "p4":{
          return "Part 4"
        }
        case "rv":{
          return "Review"
        }
        case "ds1":{
          return "Daily Scene 1"
        }
        case "ds2":{
          return "Daily Scene 2"
        }
        case "ds3":{
          return "Daily Scene 3"
        }
        case "ds4":{
          return "Daily Scene 4"
        }
        case "ds5":{
          return "Daily Scene 5"
        }
        case "food":{
          return "Food"
        }
        case "activities":{
          return "Activities"
        }
        case "family":{
          return "Family"
        }
        case "things":{
          return "Things"
        }
        case "animals":{
          return "Animals"
        }
        case "easy":{
          return "Easy"
        }
        case "adv":{
          return "Advanced"
        }
        case "game":{
          return "Game-based"
        }
        case "card":{
          return "Card-based"
        }
        case "team":{
          return "Team-based"
        }
        case "summer":{
          return "Summer"
        }
        case "autumn":{
          return "Autmun"
        }
        case "winter":{
          return "Winter"
        }
        case "spring":{
          return "Spring"
        }
        default:{
          return "Next Page"
        }
      }
    }
    let linkList = dataKeys.map((link, i) => {
      return (
        <Link className={"waves-effect btn page-btn " + checkActive(this.props.match.params.id, link)} key={i} to={"/" + this.props.match.params.loc + "/" + link}>{checkName(link)}</Link>
      )
    });
    return linkList;
  }

  pageTitle() {
    let loc = this.props.match.params.loc;
    switch(loc) {
        //NH1 start
        case "nh1u1":{
          return "NH1 Unit 1 Materials"
        }
        case "nh1u2":{
          return "NH1 Unit 2 Materials"
        }
        case "nh1u3":{
          return "NH1 Unit 3 Materials"
        }
        case "nh1u4":{
          return "NH1 Unit 4 Materials"
        }
        case "nh1u5":{
          return "NH1 Unit 5 Materials"
        }
        case "nh1u6":{
          return "NH1 Unit 6 Materials"
        }
        case "nh1u7":{
          return "NH1 Unit 7 Materials"
        }
        case "nh1u8":{
          return "NH1 Unit 8 Materials"
        }
        case "nh1u9":{
          return "NH1 Unit 9 Materials"
        }
        case "nh1u10":{
          return "NH1 Unit 10 Materials"
        }
        case "nh1u11":{
          return "NH1 Unit 11 Materials"
        }
        case "nh1dsplus":{
          return "NH1 Daily Scenes + Materials"
        }
        //NH1 end
        //NH2 start
        case "nh2u1":{
          return "NH2 Unit 1 Materials"
        }
        case "nh2u2":{
          return "NH2 Unit 2 Materials"
        }
        case "nh2u3":{
          return "NH2 Unit 3 Materials"
        }
        case "nh2u4":{
          return "NH2 Unit 4 Materials"
        }
        case "nh2u5":{
          return "NH2 Unit 5 Materials"
        }
        case "nh2u6":{
          return "NH2 Unit 6 Materials"
        }
        case "nh2u7":{
          return "NH2 Unit 7 Materials"
        }
        case "nh2dsplus":{
          return "NH2 Daily Scenes + Materials"
        }
        //NH2 end
        //NH3 start
        case "nh3u1":{
          return "NH3 Unit 1 Materials"
        }
        case "nh3u2":{
          return "NH3 Unit 2 Materials"
        }
        case "nh3u3":{
          return "NH3 Unit 3 Materials"
        }
        case "nh3u4":{
          return "NH3 Unit 4 Materials"
        }
        case "nh3u5":{
          return "NH3 Unit 5 Materials"
        }
        case "nh3u6":{
          return "NH3 Unit 6 Materials"
        }
        case "nh3dsplus":{
          return "NH3 Daily Scenes + Materials"
        }
        //NH3 end
        //Special Needs start
        case "spc1":{
          return "Special Needs/Elementary Picture Cards"
        }
        case "spc2":{
          return "Special Needs/Elementary Worksheets"
        }
        case "spc3":{
          return "Special Needs/Elementary Games"
        }
        case "spc4":{
          return "Seasonal Lesson Materials"
        }
        //Special Needs end
        default:{
          return "Extra"
        }
      }
  }

  render() {
    return (
    	<div className="container-fluid">
        <div className="section">
          <div className="row">
            <div className="col s12 l5">
              <h4>{this.pageTitle()}</h4>
            </div>
            <div className="col s12 l7 right">
              <div className="right">
                {this.loadLinks()}
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            {this.loadPage(this.props.match.params.id)}
          </div>
        </div>
      </div>
    )
  }
}