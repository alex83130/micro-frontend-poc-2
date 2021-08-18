import React from 'react';
import { ShoppingCart as ShoppingCartIcon } from '@material-ui/icons';
import ListItemLink from 'shell/ListItemLink';

function Navigation() {
  return (
    <>
      <ListItemLink
        to="http://localhost:3007/api"
        icon={<ShoppingCartIcon />}
        text="App3 - SSR"
        legacy={true}
      />
    </>
  );
}

export default Navigation;
