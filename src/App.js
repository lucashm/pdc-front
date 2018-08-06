import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main';
import Info from './pages/info';
import Header from './components/header';
import './lib/css/main.css';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="Main-container">
            <Header />
            <div >
              <Route exact path="/" component={Main} />
              <Route path="/about" component={Info} />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
