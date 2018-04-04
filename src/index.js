import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store} className='unscroll'>
    <App className='unscroll'/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
