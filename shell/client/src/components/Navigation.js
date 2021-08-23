import React from 'react';
import { makeStyles, Divider, Drawer, IconButton, List } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon, Menu as MenuIcon } from '@material-ui/icons';
import clsx from 'clsx';
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
    width: 260,
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
