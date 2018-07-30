import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main';
import Info from './pages/info';
import Header from './components/header';
import './lib/css/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={Info} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
