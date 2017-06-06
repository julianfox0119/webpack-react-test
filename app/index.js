import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import { createStore } from 'redux'

import { BrowserRouter, Route} from 'react-router-dom'

import App from './components/App';
import ListView from './components/List';
import SingleView from './components/Single';

import counter from './components/reducer';

import Header from './components/common/Header';
import Nav from './components/common/Nav';

require('./css/index.css');
require('./css/App.css');

// Store
const store = createStore(counter)

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div className="App">
                <Header />
                <Nav />
                <Route exact path="/" component={App}/>
                <Route path="/list" component={ListView}/>
                <Route path="/single" component={SingleView}/>
            </div>        
        </BrowserRouter>
     </Provider>
     ),
     document.getElementById('content')
);

