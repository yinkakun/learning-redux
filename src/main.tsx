import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import store from './store';
import { fetchCharacters } from './characters-slice';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
