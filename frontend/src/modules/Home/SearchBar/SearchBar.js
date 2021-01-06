import React from "react";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import "./SearchBar.scss";

export default function SearchBar(props) {
  return (
    <div className="search-bar">
      <Paper component="form" className="search-bar">
        <InputBase
          className="search-input"
          fullWidth
          placeholder="Search for restaurants"
        />
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
