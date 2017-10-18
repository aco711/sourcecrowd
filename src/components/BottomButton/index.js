import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const BottomButton = ({ onPress, title, keyboardUp }) => (
    <TouchableHighlight 
        style={ keyboardUp ? [styles.container, styles.keyboardUp] : [styles.container, styles.keyboardDown] }
        onPress={ onPress }
    >
        <View style={ styles.textContainer }>
            <Text style={ styles.text }>{ title }</Text>
        </View>
    </TouchableHighlight>
);

export default BottomButton;