import React, { Component } from 'react';

class SearchPanel extends Component {

  onChangeHandler = (e) => {
    console.log(e.target.value);
    this.props.onSearch(e.target.value)
  }

  render() {
    return (
      <input onChange={this.onChangeHandler}></input>
    )
  }
}

export default SearchPanel;