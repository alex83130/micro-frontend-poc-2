import React from 'react';
import { makeStyles, Divider, Drawer, IconButton, List, Toolbar } from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as UserIcon,
  Menu as MenuIcon,
} from '@material-ui/icons';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
//import SettingsNavigation from "settings/Navigation";
//import DashboardNavigation from "dashboard/Navigation";
import App1Navigation from 'app1/Navigation';
import App2Navigation from 'app2/Navigation';

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

function Navigation(props) {
  const classes = useStyles();

  console.log('props', props);

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !props.drawer.open && classes.drawerPaperClose),
      }}
      open={props.open}
    >
      <div className={classes.toolbarIcon}>
        {props.drawer.open ? (
          <IconButton onClick={props.drawer.closeDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        ) : (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={props.drawer.openDrawer}
            className={clsx(classes.menuButton, props.drawer.open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </div>
      <Divider />
      <List>
        <App1Navigation />
        <App2Navigation />
        <Divider />
      </List>
    </Drawer>
  );
}

export default Navigation;
