/**
 * Created by zeng on 2016/5/9.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route} from 'react-router-dom'

import App from './components/App';
import ListView from './components/List';
import SingleView from './components/Single';

import Header from './components/common/Header';
import Nav from './components/common/Nav';

require('./css/index.css');
require('./css/App.css');

ReactDOM.render((
     <BrowserRouter>
        <div className="App">
            <Header />
            <Nav />
            <Route exact path="/" component={App}/>
            <Route path="/list" component={ListView}/>
            <Route path="/single" component={SingleView}/>
        </div>        
     </BrowserRouter>
     ),
     document.getElementById('content')
);

