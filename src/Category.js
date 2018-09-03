import React, { Component } from 'react'
import TitleBar from './components/TitleBar'
import NewsSection from './components/news/NewsSection';
import axios from 'axios'
import {API_KEY} from './config/apikey'
import {
    LinearProgress
  } from '@material-ui/core'
import Footer from './components/Footer'
export default class Category extends Component {
    state = {
        news: [],
        isLoaded: false
    }
    componentDidMount = () => {
        const url = `https://newsapi.org/v2/top-headlines?language=en&country=us&category=${this.props.match.params.name}&apikey=${API_KEY}`;
        axios.get(url)
            .then(res => {
                this.setState({
                    news: res.data.articles,
                    isLoaded: true
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
        <div>
            {
                (this.state.isLoaded) ? 
                <React.Fragment>
                    <TitleBar active={this.props.match.params.name} />
                    <div className="news_container">
                        <h1 className="cat_title">{this.props.match.params.name} news</h1> 
                        <NewsSection news={this.state.news}/>
                    </div>
                    <Footer />
                </React.Fragment> :
                <LinearProgress/>
            }
        </div>
        )
    }
}
