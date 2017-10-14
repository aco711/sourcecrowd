import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const NoteCard = ({ 
    title,
    timestamp,
    author,
    replies,
    id
}) => (
    <View style={ styles.container }>
        <View style={ styles.titleContainer }>
            <Text style={ styles.title }>{ title }</Text>
        </View>
        <View style={ styles.metadataContainer }>
            <Text>{`Posted ${ timestamp } ago by ${ author }`}</Text>
        </View>
    </View>
);

export default NoteCard;