import React, { Component } from 'react'
import RecentUploadsList from './RecentUploadsList'
import ArticlesList from './ArticlesList'
//note: for Recent Uploads section, remove bottom-margin

class Home extends Component {

  render() {
    return (
	   <div className="row">
        <div className="col s12 l4">
            <div className="card z-depth-4">
                <div className="card-content">
                    <h4 className="center">Recent Uploads</h4>
                    <RecentUploadsList />
                    <div className="row">
                        <div className="col s12 center">
                            <h5>File Upload</h5>
                            <p>People helping people. It's powerful stuff. Help contribute to NihonALT:</p>
                            <p><a href="#!"><i className="material-icons md-span md-48">file_upload</i></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col s12 l8">
            <div className="card z-depth-4">
                <div className="card-content">
                    <h4 className="center">Otsukaresama News / Articles</h4>
                    <div className="row">
                        <ArticlesList />
                        <p className="center">Article <a>archive</a></p>
                    </div>
                </div>
        	</div>
        </div>

        

    </div>
    )
  }
}
export default Home