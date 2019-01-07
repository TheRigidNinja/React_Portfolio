import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  appNav: {
    "box-shadow": "none",
    background: "transparent"
  },
  grow: {
    flexGrow: 1,
    color: "#202124"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "#202124"
  }
};

function Navbar(props) {
  const { classes } = props;
  return <div >
    <AppBar position="static" className={classes.appNav}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>News</Typography>
          <IconButton className={classes.menuButton} aria-label="Menu">
              <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>;
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);