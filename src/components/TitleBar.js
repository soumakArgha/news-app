import React, { Component } from 'react'
import {Consumer} from './../Store'
import {
    Icon,
    IconButton
} from '@material-ui/core'
import style from './../style'

export default class TitleBar extends Component {

    render() {
        return (
        <Consumer>
            {
                (store) => (
                    <React.Fragment>
                        <div style={{position: 'fixed', top: '0', width: '100%'}}>
                            <div className="brand_logo">
                                <IconButton>
                                    <div className="menu_icon">
                                        <Icon style={style.icon}>menu</Icon>
                                    </div>
                                </IconButton>
                                <h1>News for Everyone</h1>
                                <IconButton>
                                    <Icon style={style.icon}>search</Icon>
                                </IconButton>
                            </div>
                            <div className="title_bar">
                                <ul>
                                    {
                                        store.categories.map((cat, i) => (
                                            <li key={i}>{cat}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        
                    </React.Fragment>
                )
            }
        </Consumer>
        )
    }
}
