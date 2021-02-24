  import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from 'react-helmet';

function App() {
  return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Photo Matias - Página Inicial</title>
          <link rel="Photo Matias" href="https://www.photo-matias.com.br/" />
        </Helmet>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </>
  );
}

export default App;
