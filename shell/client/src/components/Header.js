import React from 'react';
import { AppBar as MuiAppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useServiceContext } from '../Service';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24,
  },
  appBar: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: '100%',
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const serviceContext = useServiceContext();

  return (
    <MuiAppBar
      position="absolute"
      className={clsx(classes.appBar, props.drawer.open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {serviceContext.title}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
