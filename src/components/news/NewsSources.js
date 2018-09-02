import React, { Component } from 'react'
import {Consumer} from '../../Store'

export default class NewsSources extends Component {
  render() {
    return (
      <Consumer>
        {
          (store) => ( 
            <React.Fragment>
              <div className="news_sources">
                <h1>Top News Souces</h1>
                {
                  store.newsSources.map((news, i) => (
                    <div className="news_sources_card" key={i}>
                      <h2><a href={news.url}>{news.name}</a></h2>
                      <p>{news.description}</p>
                    </div>
                  ))
                }
              </div>
            </React.Fragment>
          )
        }
      </Consumer>
    )
  }
}
