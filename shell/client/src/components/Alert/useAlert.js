import * as React from "react";

const Context = React.createContext(undefined);

function useAlertContext() {
  const context = React.useContext(Context);

  if (context === undefined) {
    throw new Error(
      "AlertContext value is undefined. Make sure you use the AlertProvider before using the context."
    );
  }

  return context;
}

function AlertProvider({children, value}) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { useAlertContext, AlertProvider }
