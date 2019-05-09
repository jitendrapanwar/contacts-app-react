import React from 'react';

const SearchPanel = (props) => (

  // onChangeHandler = (e) => {
  //   this.props.onSearch(e.target.value)
  // } 
      <input onChange={(e) => props.onSearch(e.target.value)}></input>
)

export default SearchPanel;