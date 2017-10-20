import { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';
import { settings } from './src/config/settings';

registerScreens();

Navigation.startSingleScreenApp({ 
  screen: {
    screen: 'HomeScreen',
    title: 'Ford Design Studio'
  }
});