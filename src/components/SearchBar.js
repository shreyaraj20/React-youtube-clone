import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => this.setState({ searchTerm: event.target.value });
  handleSubmit = e => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
  };

  onKeyPress = event => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          fullWidth
          label="Search..."
          onChange={this.handleChange}
          onKeyPress={this.onKeyPress}
        />
      </form>
    );
  }
}

export default SearchBar;
