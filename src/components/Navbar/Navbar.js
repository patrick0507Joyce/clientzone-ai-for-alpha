import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import logo from "../../images/logo_ai_for_alpha.svg";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("");
    setUser(null);
  };

  const tokenHook = () => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  };

  useEffect(tokenHook, [location]);


  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Paper 
        variant="elevation"
        component={Link}
        to="/allocation"
        >
          <img className={classes.image} src={logo} alt="icon" height="60" />
        </Paper>
      </div>
      <Toolbar className={classes.navbar}>
        <div>
          <Button
            component={Link}
            to="/performance"
            className={classes.navItem}
            variant="outlined"
          >
            Performance
          </Button>
          <Button
            component={Link}
            to="/allocation"
            className={classes.navItem}
            variant="outlined"
          >
            Allocation
          </Button>
          <Button
            component={Link}
            to="/explain"
            className={classes.navItem}
            variant="outlined"
          >
            Explicability
          </Button>
        </div>
      </Toolbar>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>

            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>

            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button
              component={Link}
              to="auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
