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
      <Paper
        elevation={6}
        style={{
          padding: "25px",
          backgroundColor: "#292826",
          width: "700px",
          height: "15px",
          position: "relative",
          left: "20%"
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search..."
            onChange={this.handleChange}
            onKeyPress={this.onKeyPress}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
