import React from 'react';
import { ShoppingCart as ShoppingCartIcon } from '@material-ui/icons';
import ListItemLink from 'shell/ListItemLink';

function Navigation() {
  return (
    <>
      <ListItemLink to="/app2-ajax" icon={<ShoppingCartIcon />} text="App2 - Ajax" />
      <ListItemLink to="/app2-iframe" icon={<ShoppingCartIcon />} text="App2 - Iframe" />
    </>
  );
}

export default Navigation;
