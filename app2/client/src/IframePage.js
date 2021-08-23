import { Container, Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import React from 'react';
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

export default function IframePage() {
  const classes = useStyles();
  /*  const serviceContext = useServiceContext();
    React.useEffect(() => {
      serviceContext.setService({ title: "Orders" });
    }, []);*/

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h6" color="primary" gutterBottom>
              App2 - Iframe
            </Typography>
            <iframe src={`${process.env.APP2_URL}/api/iframe`} style={{ borderWidth: 0 }} />
          </Paper>
        </Grid>
      </Container>
    </main>
  );
}
