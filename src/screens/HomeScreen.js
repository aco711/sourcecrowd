import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class HomeScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello</Text>
                <Button
                    title="I'm a button"
                    onPress={ () => navigate('StationScreen', { name: 'Jane' })}
                />
            </View>
        );
    }
}

export default HomeScreen;