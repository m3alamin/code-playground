import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


import App from './components/App';
import store from './store';
import {changeAge, changeName} from './actions/about';

console.log("initial state: ", store.getState());



let unsubscribe = store.subscribe(() =>
console.log(store.getState())
);
store.dispatch(changeAge(55));
store.dispatch(changeName('Amin'));
unsubscribe();

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);