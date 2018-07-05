// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'components/App';
import reducers from 'reducers';
import makeRootReducer from 'reducers/root';

// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */
// Import CSS reset and Global Styles
import 'styles/theme.scss';

import createSagaMiddleware from 'redux-saga';
// import rootSaga from 'sagas';

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
      // Prevent recomputing reducers for `replaceReducer`
      shouldHotReload: false,
    })
    : compose;
/* eslint-enable */

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
  ...reducers,
  router: routerReducer,
});

const history = createHistory();
const middleware = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  makeRootReducer(appReducer),
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);

// run saga
// sagaMiddleware.run(rootSaga);

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['components/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });

  // module.hot.accept('./reducers', () => {
  //   store.replaceReducer(createReducer(store.injectedReducers));
  // });
}

render();
