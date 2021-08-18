import React from 'react';

const AjaxPage = React.lazy(() => import('./AjaxPage'));
const IframePage = React.lazy(() => import('./IframePage'));

const routes = [
  {
    path: '/app2-ajax',
    component: AjaxPage,
    exact: true,
  },
  {
    path: '/app2-iframe',
    component: IframePage,
    exact: true,
  },
];

export default routes;
