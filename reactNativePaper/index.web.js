import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './src/app.json';
import App from './src/App';
import iconFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';

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