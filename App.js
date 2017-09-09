import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    console.ignoredYellowBox = ['Setting a timer'];
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <Router />
      </Provider>
    );
  }
}

export default App;
