import React from 'react';
const ShellLegacy = React.lazy(() => import('shell/ShellLegacy'));

function App() {
  return (
    <React.Suspense fallback={<></>}>
      <ShellLegacy />
    </React.Suspense>
  );
}

export default App;
