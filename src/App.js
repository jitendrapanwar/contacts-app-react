import React, { Component } from 'react';
import './App.css';
import ContactList from './containers/contact-list';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ContactList />
      </div>
    );
  }
}

export default App;
