import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class DiscussionsScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>I'm a discussions screen</Text>
            </View>
        );
    }
}

export default DiscussionsScreen;