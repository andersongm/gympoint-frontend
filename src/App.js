import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';

// import { Container } from './styles';

export default function App() {
  return (
    <Router history={history}>
          <Routes />
          <GlobalStyle />
          {/* <ToastContainer autoClose={3000} /> */}
    </Router>
  );
}
