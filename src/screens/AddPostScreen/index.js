import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class AddPostScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>I'm a add post screen</Text>
            </View>
        );
    }
}

export default AddPostScreen;