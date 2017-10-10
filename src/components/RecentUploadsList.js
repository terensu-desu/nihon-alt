import React, { Component } from 'react'
import RecentUploadsStore from '../stores/RecentUploadsStore'

class RecentUploadsList extends Component {
  constructor() {
    super()
    this.state = {
      uploadlist: RecentUploadsStore.getList()
    }
  }

  loadList() {
    let listData = this.state.uploadlist
    let listMap = listData.map((item, i) => {
      return (
        <div className="col s12 center" key={i}>
            <h5> { item.title } <span>by { item.author }</span></h5>
            <p>{ item.text } <span>Level: { item.level }</span></p>
            <hr className="upload-hr"/>
        </div>
      )
    })
    return listMap
  }

  render() {
    return (
    	<div className="row low-margin">
        { this.loadList() }
      </div>
    )
  }
}

export default RecentUploadsList