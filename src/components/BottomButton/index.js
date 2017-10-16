import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const BottomButton = () => (
    <View style={ styles.container }>
        <View style={ styles.textContainer }>
            <Text style={ styles.text }>Add a new note or discussion</Text>
        </View>
    </View>
);

export default BottomButton;