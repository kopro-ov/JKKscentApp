import * as React from 'react';
import { GalioProvider } from 'galio-framework'
import Navigator from './Screens/Navigator';

const App = () =>  {
  return (
    <GalioProvider >
      <Navigator />
    </GalioProvider>
  );
};

export default App;