import React, { Component } from 'react'
import NewsSection from './NewsSection'
import NewsSources from './NewsSources'
import {Consumer} from './../../Store'

export default class News extends Component {
    render() {
        return (
            <Consumer>
                {(store) => (
                    <React.Fragment>
                        <div className="news_container">
                            <h1 className="cat_title">Top news</h1>
                            <div className="news_grid">
                                <NewsSection news={store.topNews}/>
                                <div className="vertical_seperator"></div>
                                <NewsSources/>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </Consumer>
        )
    }
}
