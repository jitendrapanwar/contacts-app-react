import React, { Component } from 'react';
import './App.css';
import ContactList from './containers/contact-list';
import SearchPanel from './components/search-panel';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText:''
    }

  }

  onSearchHandler = (text) => {
    console.log(text)
    this.setState({searchText: text})
  }
  render() {
    return (
      <div className="App">
        <SearchPanel onSearch={this.onSearchHandler}/>
        <ContactList searchText={this.state.searchText}/>
      </div>
    );
  }
}

export default App;
