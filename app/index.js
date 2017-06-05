/**
 * Created by zeng on 2016/5/9.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Link } from 'react-router-dom'

import App from './components/App';
import ListView from './components/List';
import SingleView from './components/Single';

require('./css/index.css');
require('./css/App.css');

ReactDOM.render((
     <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/list" component={ListView}/>
            <Route path="/single" component={SingleView}/>
        </div>        
     </BrowserRouter>
     ),
     document.getElementById('content')
);

