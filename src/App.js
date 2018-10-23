import React, { Component } from 'react';
import './App.css';
//import 'jquery/dist/jquery.min';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/src/modal';

import Header from './components/Header';
import CartList from './components/CartList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <CartList />
      </div>
    );
  }
}
export default App; 
