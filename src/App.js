import React, { Component } from 'react';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from './RouteList';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isMobile: false,
      isTablet: false
    }
  }

  componentDidMount() {
    this.checkViewport();
  }

  checkViewport = () => {
    if(window.innerWidth >= 768 && window.innerWidth <= 1024 ) {
      this.setState({ isTablet: true})
    }
    if(window.innerWidth < 768) {
      this.setState({ isMobile: true})
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <RouteList />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
