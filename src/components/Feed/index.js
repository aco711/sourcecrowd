import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Feed = ({ title, children }) => (
    <View style={ styles.container }>
        <View style={ styles.titleContainer }>
            <Text style={ styles.title }>{ title }</Text>
        </View>
        <View style={ styles.feedContainer }>
            { React.Children.map(children, (child) => {
                return (
                    <View style={ styles.feedItem }>
                        { child }
                    </View>
                );
            })}
        </View>
    </View>
);

export default Feed;