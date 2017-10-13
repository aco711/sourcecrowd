import React, { Component } from 'react';
import { Text, View } from 'react-native';

class NotesScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>I'm a notes screen</Text>
            </View>
        );
    }
}

export default NotesScreen;