import React, { Component } from 'react'
import ArticleStore from '../stores/ArticleStore'

class ArticlesList extends Component {
  constructor() {
    super()
    this.state = {
      articlelist: ArticleStore.getArticles()
    }
  }

  loadArticles() {
    const articleData  = this.state.articlelist
    const articleMap = articleData.map((article, i) => {      
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
                                <h4 className="card-title">{ article.title } <span>by { article.author }</span></h4>
                                { 
                                  article.text.map((para, i)=>{
                                    return (
                                      <p key={i}>{ para }</p>
                                    )
                                  })
                                }
                                <a className="card-title btn activator">View comments</a>
                            </div>
                            <div className="card-reveal">
                                <span>Comment and Discuss</span>
                                <div className="row">
                                    <div className="col s12">
                                        <p>CANCER COMMENTS HERE</p>
                                        <a className="card-title btn">Close comments</a>
                                    </div>
                                    <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                                <label htmlFor="textarea1">Textarea</label>
                                                <a className="btn">Submit comment</a>
                                                <p>Comments subject to approval.</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className="row center">
                    <h5>Share this article</h5>
                    <p>Twitter -- Facebook -- Reddit</p>
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