import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import BottomButton from '../../components/BottomButton';
import API from '../../lib/api';

export default class ModalScreen extends Component {
    render() {
        const { navigator, station, dismissCallback } = this.props;

        return (
            <View style={ styles.container }>
                <View style={ styles.textContainer }> 
                    <Text style={ styles.text }>You've reached the { station } station. Would you like to see the new notes available?</Text>
                </View>
                <BottomButton
                    title="Take me there"
                    onPress={ () => {
                        dismissCallback();
                    }}
                />
            </View>
        );
    }
}