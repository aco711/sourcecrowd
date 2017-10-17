import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Screens from './src/screens';

import API from './src/lib/api';

const {
    HomeScreen,
    AddPostScreen,
    PostScreen,
    StationScreen
} = Screens;

const Nav = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    AddPostScreen: { screen: AddPostScreen },
    PostScreen: { screen: PostScreen },
    StationScreen: { screen: StationScreen },
})

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Nav/>;
    }
}

export default App;