import React, { Component } from 'react'
import ArticleStore from '../stores/ArticleStore'

class ArticlesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articlelist: ArticleStore.getArticles(this.props.page)
    }
  }

  componentWillReceiveProps(nextProps) {
    let nextPage = nextProps.page
    this.setState({
      articlelist: ArticleStore.getArticles(nextPage)
    })
  }

  loadArticles() {
    let articleData  = this.state.articlelist
    let articleMap = articleData.map((article, i) => {      
      return (
        <div className="col s12" key={i}>
          <h5>{ article.title } <span>by { article.author }</span></h5>
          <p> { article.preview } <a className="modal-trigger" href={ "#modal"+i }> Continue reading...</a></p>
          <hr/>
          <div id={ "modal" + i } className="modal">
            <div className="modal-content">
              <div className="row">
                  <div className="col s12">
                      <div className="card">
                          <div className="card-content article">
                              <h4 className="center">{ article.title } <span>by { article.author }</span></h4>
                              { 
                                article.text.map((para, i)=>{
                                  return (
                                    <p key={i}>{ para }</p>
                                  )
                                })
                              }
                              <h5>Share: <span>Reddit - Twitter - Facebook</span></h5>
                              <a className="card-title btn activator nihon-red">View comments</a>
                          </div>
                          <div className="card-reveal">
                              <span>Comment and Discuss</span>
                              <div className="row">
                                  <div className="col s12">
                                      <p>CANCER COMMENTS HERE</p>
                                      <a className="card-title btn nihon-red">Close comments</a>
                                  </div>
                                  <form className="col s12">
                                      <div className="row">
                                          <div className="input-field col s12">
                                              <textarea id="textarea1" className="materialize-textarea"></textarea>
                                              <label htmlFor="textarea1">Comment</label>
                                              <a className="btn nihon-red">Submit comment</a>
                                              <p>- Please be considerate to others.</p>
                                              <p>- Comments subject to approval.</p>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return articleMap
  }

  render() {
    return (
      <div className="row">
        { this.loadArticles() }
      </div>
    )
  }
}

export default ArticlesList