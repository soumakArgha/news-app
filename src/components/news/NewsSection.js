import React, { Component } from 'react'
import NewsCard from './NewsCard'

// import {
//     Button
// } from '@material-ui/core'
export default class NewsSection extends Component {
    render() {
        return (
            <div>
                {
                    this.props.news.map((news, i) => (
                        <NewsCard
                        key={i}
                        title={news.title}
                        author={news.author}
                        url={news.url}
                        source={news.source.name}
                        desc={news.description}
                        image={news.urlToImage}/>
                    ))
                }
                {/* <Button variant="outlined" style={{border: '1px solid #111', color: '#111', display: 'block', margin: '30px auto'}}>Load More</Button> */}
            </div>
        )
    }
}
