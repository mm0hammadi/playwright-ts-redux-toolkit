import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';

import store from './slices/index';

const init = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default init;
