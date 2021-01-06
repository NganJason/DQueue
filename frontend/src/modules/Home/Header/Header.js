import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import "./Header.scss";

export default function Header(props) {
  return (
    <div className="nav-bar">
      <AppBar className="nav-bar" position="static">
        <Toolbar>
          <Typography variant="h4" className="nav-bar-title">
            DQueue
          </Typography>
          <Button variant="contained" className="nav-bar-btn">Login</Button>
          <Button variant="contained" className="nav-bar-btn">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
