import { Container, Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import React, { useEffect, useState, useLayoutEffect } from 'react';
//import { useServiceContext } from "shell/Service";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
}));

export default function AjaxPage() {
  const classes = useStyles();
  /*  const serviceContext = useServiceContext();
  React.useEffect(() => {
    serviceContext.setService({ title: "Orders" });
  }, []);*/

  const [html, setHTML] = useState('');

  useLayoutEffect(() => {
    fetch(`${__webpack_public_path__}api/ajax`)
      .then((res) => res.text())
      .then((data) => {
        setHTML(data);
      });
  }, []);

  useEffect(() => {
    if (html !== '') {
      const scripts = document.getElementsByClassName('legacy-script');
      for (var i = 0; i < scripts.length; ++i) {
        window.eval(scripts[i].innerHTML);
      }
    }
  }, [html]);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h6" color="primary" gutterBottom>
              App2 - Ajax
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Paper>
        </Grid>
      </Container>
    </main>
  );
}
