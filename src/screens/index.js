import { Navigation } from 'react-native-navigation';

import AddPostScreen from './AddPostScreen';
import HomeScreen from './HomeScreen';
import PostScreen from './PostScreen';
import StationScreen from './StationScreen';
import AddReplyScreen from './AddReplyScreen';
import ModalScreen from './ModalScreen';

export function registerScreens() {
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
    Navigation.registerComponent('AddPostScreen', () => AddPostScreen);
    Navigation.registerComponent('PostScreen', () => PostScreen);
    Navigation.registerComponent('StationScreen', () => StationScreen);
    Navigation.registerComponent('AddReplyScreen', () => AddReplyScreen);
    Navigation.registerComponent('ModalScreen', () => ModalScreen);
}