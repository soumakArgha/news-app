import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Store'
import Category from './Category'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
ReactDOM.render(
                <Store>
                    <Router>
                        <Switch>
                            <Route path='/' exact component={App} />
                            <Route path='/category/:name' exact component={Category}/>
                        </Switch>
                    </Router>
                </Store>, 
                document.getElementById('root')
                );