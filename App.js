import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

import SmallBanner from './SmallBanner';
import MovieManager from './MovieManager';

class App extends Component {
  render() {
    return (
      <main className="container">
        <header className="page-header">
          <h1>RentPath React Experiments <SmallBanner/></h1>
        </header>
        <MovieManager/>
      </main>
    );
  }
}

export default App;
