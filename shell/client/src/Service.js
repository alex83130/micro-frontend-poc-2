import * as React from 'react';

export const Context = React.createContext(undefined);

function useService(defaultValue) {
  const [service, setService] = React.useState(defaultValue);
  const updateService = (values) => setService((oldValues) => ({ ...oldValues, ...values }));

  return {
    ...service,
    updateService,
  };
}

export function useServiceContext() {
  const context = React.useContext(Context);

  if (context === undefined) {
    throw new Error(
      'ServiceContext value is undefined. Make sure you use the ServiceProvider before using the context.'
    );
  }

  return context;
}

const DEFAULT_VALUE = { title: '', legacy: false };

export function ServiceProvider({ children, defaultValue = DEFAULT_VALUE }) {
  const value = useService(defaultValue);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
