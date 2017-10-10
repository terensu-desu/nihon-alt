import React, { Component } from 'react'
import RecentUploadsList from './RecentUploadsList'
import ArticlesList from './ArticlesList'
import FileUpload from './FileUpload'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      articlepage: 1
    }
  }

  pageChangeUp() {
    if(this.state.articlepage !== 3) {
      this.setState((prevState) => ({
        articlepage: prevState.articlepage + 1
      }))
    }
  }
  pageChangeDown() {
    if(this.state.articlepage !== 0){
      this.setState((prevState) => ({
          articlepage: prevState.articlepage - 1
      }))
    }
  }

  render() {
    let cardActionStyle = {
        padding: "8px 24px 24px 24px"
    }
    return (
	   <div className="row">
        <div className="col s12 l4">
            <div className="card z-depth-4">
                <div className="card-content">
                    <h4 className="center">Recent Uploads</h4>
                    <RecentUploadsList />
                    <div className="row low-margin">
                        <div className="col s12 center">
                            <span className="card-title activator col s6 offset-s3">File Upload<i className="material-icons md-span md-36 right">file_upload</i></span>
                            <p className="col s12">People helping people. It's powerful stuff. Help contribute to NihonALT.</p>
                        </div>
                    </div>
                </div>
                <div className="card-reveal">
                	<div className="row low-margin">
                		<div className="col s12 center">
	                		<span className="card-title activator col s6 offset-s3">File Upload<i className="material-icons md-span md-36 right">close</i></span>
		                  <p className="col s12">People helping people. It's powerful stuff. Help contribute to NihonALT.</p>
                		</div>
                	</div>
                	<FileUpload/>
                </div>
            </div>
        </div>

        <div className="col s12 l8">
            <div className="card z-depth-4">
                <div className="card-content">
                    <h4 className="center">Otsukare News / Articles</h4>
                    <ArticlesList page={ this.state.articlepage } />
                </div>
                <div style={ cardActionStyle } className="card-action">
                    <a onClick={ this.pageChangeDown.bind(this) } id="pageUp" className="left btn nihon-red">Newer</a>
                    <a onClick={ this.pageChangeUp.bind(this) } id="pageDown" className="right btn nihon-red">Older</a>
                    <br/>
                </div>
        	</div>
        </div>
    </div>
    )
  }
}
export default Home