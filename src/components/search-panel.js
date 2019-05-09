import React from 'react';
import TextField from '@material-ui/core/TextField';
const SearchPanel = (props) => (
    <TextField
      className="search-panel"
      id="outlined-search"
      label="Enter search criteria"
      type="search"
      margin="normal"
      variant="outlined"
      onChange={(e) => props.onSearch(e.target.value)}
    />
)

export default SearchPanel;