import React from 'react';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from './RouteList';
import './App.css';

function App() {
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

export default App;
