import React from 'react';
import {StatusBar} from 'react-native';
import './src/styles/global.css';
import {Profile} from './src/screen/Profile';
import {ToastProvider} from './src/components/Toast';

import {colors} from './src/styles/colors';

function App(): React.JSX.Element {
  return (
    <ToastProvider position="top">
      <Profile />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.gray[700]}
      />
    </ToastProvider>
  );
}

export default App;
