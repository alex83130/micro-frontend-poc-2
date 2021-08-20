import React from 'react';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import ListItemLink from 'shell/ListItemLink';

function Navigation() {
  return (
    <>
      <ListItemLink to="/app1" icon={<DashboardIcon />} text="App1 - React" />
    </>
  );
}

export default Navigation;
