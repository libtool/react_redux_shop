import './main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, Route} from 'react-router';
import Layout from 'containers/layout';
import Phones from 'containers/phones';
import Phone from 'containers/phone';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store = {store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path ='/' component={Phones} />
      </Route>
      <Route path='/phones/:id' component={Phone} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
