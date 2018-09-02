import React, { Component } from 'react'

export default class NewsCard extends Component {
    render() {
        return (
        <React.Fragment>
            
            <a href={this.props.url} className="news_card">
                <div className="news_photo" style={{backgroundImage:`linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url("${this.props.image}")`}}></div>
                <div className="news_content">
                    <h1 className="primary_heading">{this.props.title}</h1>
                    <h2>published by {this.props.source}</h2>
                    <p className="secondary_heading">
                        {this.props.desc}
                    </p>
                </div>
            </a>
            <div className="seperator"></div>
        </React.Fragment>
        )
    }
}
