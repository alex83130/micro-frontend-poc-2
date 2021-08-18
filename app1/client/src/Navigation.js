import React from 'react';
import { ShoppingCart as ShoppingCartIcon } from '@material-ui/icons';
import ListItemLink from 'shell/ListItemLink';

function Navigation() {
  return (
    <>
      <ListItemLink to="/app1" icon={<ShoppingCartIcon />} text="App1 - React" />
    </>
  );
}

export default Navigation;
