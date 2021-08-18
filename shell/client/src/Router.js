import { Route, Switch } from 'react-router-dom';
import React from 'react';
import app1Routes from 'app1/routes';
import app2Routes from 'app2/routes';

const routes = [...app1Routes, ...app2Routes];

export default function Router() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Route path="*" component={routes.find(({ path }) => path === '/app1').component} />
      </Switch>
    </React.Suspense>
  );
}
