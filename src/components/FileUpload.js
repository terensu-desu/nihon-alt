import React, { Component } from 'react'

class FileUpload extends Component {
  validateForm() {
    let user = document.forms["user-upload"]["user-name"].value
    let title = document.forms["user-upload"]["file-title"].value
    let instructions = document.forms["user-upload"]["file-instructions"].value
    // let checkboxInfo = [document.forms["user-upload"]["year1"].checked, document.forms["user-upload"]["year2"].checked, document.forms["user-upload"]["year3"].checked, document.forms["user-upload"]["spc-needs"].checked, document.forms["user-upload"]["eng-club"].checked]
    let file = document.forms["user-upload"]["user-file"].files
    if(user === "" || title === "" || instructions === "" || file.length !== 1) {
      alert("Please complete the form to submit.")
      return false
    }
    if(file.length > 0) {
      if(file[0].size > 1024 * 1024 * 5) {
        alert("The file must be under 5 MB. If it can't be helped, please contact us.")
        return false
      }
    }
    let toastSuccess = document.getElementById("toastSuccess")
    toastSuccess.className = "show"
    setTimeout(()=>{ toastSuccess.className = toastSuccess.className.replace("show", "")}, 3000)
  }

  render() {
    let checkboxStyle = {
      padding: "0 10px 0 24px"
    }
    return (
    	<div className="row">
        <form className="col s12" id="user-upload">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name (Last Initial Helps)" id="user-name" type="text" className="validate" />
              <label htmlFor="user-name">Name</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="File Title" id="file-title" type="text" className="validate" />
              <label htmlFor="file-title">File Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea placeholder="Instructions for how to do this lesson (Required)." id="file-instructions" type="text" className="validate materialize-textarea"></textarea>
              <label htmlFor="file-instructions">File Instructions</label>
            </div>
          </div>
          <div className="row">
            <p className="center">What year, class, or club is this mainly for?</p>
            <p className="center">
              <input type="checkbox" id="year1" /><label htmlFor="year1" style={ checkboxStyle }>Year 1</label>
              <input type="checkbox" id="year2" /><label htmlFor="year2" style={ checkboxStyle }>Year 2</label>
              <input type="checkbox" id="year3" /><label htmlFor="year3" style={ checkboxStyle }>Year 3</label>
              <input type="checkbox" id="spc-needs" /><label htmlFor="spc-needs" style={ checkboxStyle }>Special Needs</label>
              <input type="checkbox" id="eng-club" /><label htmlFor="eng-club" style={ checkboxStyle }>English Club</label>
            </p>
          </div>
          <div className="row">
            <div className="file-field input-field col s12">
              <a className="btn nihon-red">Browse File<input id="user-file" type="file" /></a>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" accept=".ppt, .pptx, .doc, .docx, .pdf" />
              </div>
            </div>
          </div>
          <a className="btn nihon-red center-btn" onClick={ this.validateForm }>Submit<i className="material-icons right">send</i></a>
        </form>
        <div id="toastSuccess" className=" ">File Uploading!</div>
      </div>
    )
  }
}

export default FileUpload