import { BrowserRouter } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Navigation from './components/Navigation';
import Viewport from './components/Viewport';
import Header from './components/Header';
import React from 'react';
import Router from './Router';
import { ServiceProvider } from './Service';
import { useDrawer } from './hooks';
import Alert from './components/Alert';

export default function Shell() {
  const drawer = useDrawer();

  console.log('drawer', drawer);

  return (
    <ServiceProvider>
      <BrowserRouter>
        <Viewport>
          <Box display="flex" flex={1}>
            <Alert>
              <Header drawer={drawer} />
              <Navigation drawer={drawer} />
              <Router />
            </Alert>
          </Box>
        </Viewport>
      </BrowserRouter>
    </ServiceProvider>
  );
}
