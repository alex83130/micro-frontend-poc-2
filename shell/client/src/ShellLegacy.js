import { BrowserRouter } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Navigation from './components/Navigation';
import Viewport from './components/Viewport';
import React from 'react';
//import Router from './Router';
import { ServiceProvider } from './Service';
import { useDrawer } from './hooks';
import Alert from './components/Alert';

export default function ShellLegacy() {
  const drawer = useDrawer();

  return (
    <ServiceProvider defaultValue={{ title: '', legacy: true }}>
      <BrowserRouter>
        <Alert>
          <Navigation drawer={drawer} />
        </Alert>
      </BrowserRouter>
    </ServiceProvider>
  );
}
