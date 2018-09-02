import React, {
    Component
} from 'react'
import axios from 'axios'
import {
    // LinearProgress,
    CircularProgress
} from '@material-ui/core'
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
                'business',
                'technology',
                'science',
                'sports',
                'health',
                'entertainment'
            ],
            newsSources: [],
            isLoaded: false,
            topNews: []
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
        if (!this.state.isLoaded) {
            return ( <CircularProgress style={{position: 'absolute', top: '50%', left: '50%'}}/> )
        } else {
            return ( 
                <Provider value={this.state}> 
                    {
                        this.props.children
                    }
                </Provider>
            )
        }
    }
}

export {
    Consumer
};