import React, {
    Component
} from 'react'
import axios from 'axios'

import {
    API_KEY
} from './config/apikey'
const store = React.createContext();
const {
    Provider,
    Consumer
} = store;

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                "home",
                'business',
                'technology',
                'science',
                'sports',
                'health',
                'entertainment'
            ],
            newsSources: [],
            isLoaded: false,
            topNews: [],
            menuOpen: false,
            closeMenu: () => {
                this.setState({menuOpen: false})
            },
            openMenu: () => {
                this.setState({menuOpen: true})
            }
        }
    }

    componentDidMount = () => {
        axios.get(`https://newsapi.org/v2/sources?category=general&country=us&language=en&apikey=${API_KEY}`)
            .then(newsSources => {
                axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=general&apikey=${API_KEY}`)
                    .then(topNews => {
                        this.setState({
                            newsSources: newsSources.data.sources,
                            topNews: topNews.data.articles,
                            isLoaded: true
                        });
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }


    render() {
        return ( 
            <Provider value={this.state}> 
                {
                    this.props.children
                }
            </Provider>
        )
        
    }
}

export {
    Consumer
};