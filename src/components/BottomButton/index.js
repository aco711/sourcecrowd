import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const BottomButton = ({ onPress, title }) => (
    <TouchableHighlight 
        style={ styles.container }
        onPress={ onPress }
    >
        <View style={ styles.textContainer }>
            <Text style={ styles.text }>{ title }</Text>
        </View>
    </TouchableHighlight>
);

export default BottomButton;