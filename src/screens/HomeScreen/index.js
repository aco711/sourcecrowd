import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';

import Button from '../../components/Button';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello</Text>
                <Button 
                    onPress={ () => navigate('StationScreen', { name: 'Jane' })}
                    title="I'm a button"
                />
            </View>
        );
    }
}

export default HomeScreen;