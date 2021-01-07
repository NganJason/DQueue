import React from "react";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./SearchBar.module.scss";

export default function SearchBar(props) {
  return (
    <div className={styles.searchBarDiv}>
      <Paper component="form" className={styles.searchBar}>
        <InputBase
          className={styles.searchInput}
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
