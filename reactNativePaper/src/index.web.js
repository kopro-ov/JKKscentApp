import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import iconFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import App from './App';
import { name as appName } from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <React.Fragment>
        <style type="text/css">{`
          @font-face {
            font-family: 'MaterialCommunityIcons';
            src: url(${iconFont});
          }
        `}</style>
        <App />
      </React.Fragment>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
 AppRegistry.runApplication(appName, {
     rootTag: document.getElementById('root'),
 });