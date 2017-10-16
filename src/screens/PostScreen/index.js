import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Button, ScrollView } from 'react-native';
import styles from './styles';

import makerbotData from '../../assets/data/makerbot.json';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${ navigation.state.params.post.title }`
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                <Text>I am a post screen</Text>
            </View>
        );
    }
}

export default HomeScreen;