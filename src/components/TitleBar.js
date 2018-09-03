import React, { Component } from 'react'
import {Consumer} from './../Store'
import {
    Icon,
    IconButton,
    Drawer,
    List,
    ListItemText,
    ListItem
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
                                    <div className="menu_icon" onClick={store.openMenu}>
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
                                        store.categories.map((cat, i) => {
                                            var path;
                                            if(cat !== 'home') {
                                                path = `/category/${cat}`;
                                            } else{
                                                path = `/`;
                                            }
                                            
                                            return (<React.Fragment key={i}>
                                                {
                                                    (this.props.active === cat) ? 
                                                    <a href={path}>
                                                        <li className="active">{cat}</li>
                                                    </a>
                                                    :      
                                                    <a href={path}>
                                                        <li>{cat}</li>   
                                                    </a>  
                                                }   
                                            </React.Fragment>)                                                           
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <Drawer anchor="left" open={store.menuOpen} onClick={store.closeMenu}>
                            <List>
                                {
                                    store.categories.map((cat, i) => {
                                        var path;
                                            if(cat !== 'home') {
                                                path = `/category/${cat}`;
                                            } else{
                                                path = `/`;
                                            }
                                            
                                            return (<React.Fragment key={i}>
                                                {
                                                    (this.props.active === cat) ? 
                                                    <a href={path}>
                                                        <ListItem button style={{backgroundColor: '#e5e5e5'}}>
                                                            <ListItemText style={{margin: '0 30px',textTransform: 'capitalize'}}>{cat}</ListItemText>
                                                        </ListItem>
                                                    </a>
                                                    :      
                                                    <a href={path}>
                                                        <ListItem button>
                                                            <ListItemText style={{margin: '0 30px',textTransform: 'capitalize'}}>{cat}</ListItemText>
                                                        </ListItem>  
                                                    </a>  
                                                }   
                                            </React.Fragment>) 
                                    })
                                }
                            </List>
                        </Drawer>
                    </React.Fragment>
                )
            }
        </Consumer>
        )
    }
}
