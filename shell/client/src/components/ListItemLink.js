import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useServiceContext } from '../Service';
import { Link, useLocation } from 'react-router-dom';

function ListItemLink({ to, icon, text, legacy: _legacy }) {
  // const selected = useMatch(props.to);

  const { legacy } = useServiceContext();
  const isLegacy = _legacy ?? legacy;

  const location = useLocation();
  const selected = location.pathname === to;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) =>
        isLegacy ? (
          <a ref={ref} href={`${!_legacy ? 'http://localhost:3000' : ''}${to}`} {...linkProps} />
        ) : (
          <Link ref={ref} to={to} {...linkProps} />
        )
      ),
    [to]
  );

  return (
    <li>
      <ListItem selected={selected} button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </li>
  );
}

export default ListItemLink;
