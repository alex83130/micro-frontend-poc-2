import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

import { AlertProvider } from './useAlert'

export default function Alert({children}) {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState("");

  const handleOpen = (description) => {
    setOpen(true)
    setAlert(description)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <AlertProvider value={{handleOpen}}>
      {children}
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success">
          {alert}
        </MuiAlert>
      </Snackbar>
    </AlertProvider>
  );
}
