import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

import './style.scss';

const inputStyle = {
  width: '400px',
  alignSelf: 'center'
};

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {value:''}

    // this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
 } 

  keyPress(e){
    if(e.keyCode == 13){
      this.props.onSearch(e.target.value);
    }
  }

  render() {
    return (
      <div className="search-input">
        <TextField
          id="search"
          type="search"
          style={inputStyle}
          placeholder="Search metadata"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          onKeyDown={this.keyPress}
        />
        <div>{this.props.searchTerm}</div>
      </div>
    )
  }
}
