import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Screens from './src/screens';

const { 
    HomeScreen,
    AddPostScreen,
    DiscussionsScreen,
    NotesScreen,
    StationScreen
} = Screens;

const App = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    AddPostScreen: { screen: AddPostScreen },
    DiscussionsScreen: { screen: DiscussionsScreen },
    NotesScreen: { screen: NotesScreen },
    StationScreen: { screen: StationScreen },
});

export default App;