import React from 'react';
import {
    TouchableHighlight,
    Text,
} from 'react-native';
import styles from './styles';

const Button = ({ onPress, title }) => (
    <TouchableHighlight 
        style={ styles.container }
        onPress={ onPress }
    >
        <Text style={ styles.button }>{ title }</Text>
    </TouchableHighlight>
);

export default Button;