import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import GlobalStyle from './components/GlobalStyle';
import * as serviceWorker from './serviceWorker';
import client from './apollo';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <GlobalStyle />
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
