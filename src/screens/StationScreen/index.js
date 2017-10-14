import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { name } = navigation.state.params;
        return {
            title: name
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const { name } = this.props.navigation.state.params;
        return (
            <View>
                <Text>{ `Welcome, ${name}` }</Text>
            </View>
        );
    }
}

export default HomeScreen;