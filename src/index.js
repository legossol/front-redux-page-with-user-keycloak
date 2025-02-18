import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import Layout from './app/common/component/CommonLayout'
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <App />   
        </Layout>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
    // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
