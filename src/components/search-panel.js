import React, { Component } from 'react';

class SearchPanel extends Component {

  onChangeHandler = (e) => {
    this.props.onSearch(e.target.value)
  }

  render() {
    return (
      <input onChange={this.onChangeHandler}></input>
    )
  }
}

export default SearchPanel;