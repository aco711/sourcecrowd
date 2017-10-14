import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const SplitHeader = ({ children }) => (
    <View style={ styles.container }>
        { React.Children.map(children, (child) => {
            return (
                <TouchableHighlight
                    style={ styles.splitContainer } 
                    onPress={ child.props.onPress }
                >
                    <View style={ styles.split } >
                        <Text style={ styles.splitText } >
                            { child.props.title }
                        </Text>
                    </View>
                </TouchableHighlight>
            );
        })}
    </View>
);

export default SplitHeader;