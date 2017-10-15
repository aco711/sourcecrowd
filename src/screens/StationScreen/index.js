import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { data } = navigation.state.params;
        return {
            title: data.title
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const { data } = this.props.navigation.state.params;

        return (
            <View style={ styles.container }>
                <View>

                </View>
            </View>
        );
    }
}

export default HomeScreen;