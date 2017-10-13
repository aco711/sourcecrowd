import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HomeScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>I'm a station screen</Text>
            </View>
        );
    }
}

export default HomeScreen;