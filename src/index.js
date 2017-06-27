import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import Admin from './admin/admin';
import Post from './post/post';
import NoMatch from './no_match/noMatch';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

const element = document.getElementById('root');

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/:id" component={Post}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </Router>,
    element);
registerServiceWorker();
