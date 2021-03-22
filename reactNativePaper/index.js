import * as React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './src/app.json';
import App from './src/App';

export default function Main() {
  return (
    <PaperProvider>
        <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);