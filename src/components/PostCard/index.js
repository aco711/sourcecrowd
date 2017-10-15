import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const PostCard = ({ 
    title,
    type,
    timestamp,
    author,
    replies,
    id,
}) => (
    <View style={ styles.container }>
        <View style={ styles.typeContainer }>
            <Text style={ styles.type }>{ type }</Text>
        </View>
        <View style={ styles.titleContainer }>
            <Text style={ styles.title }>{ title }</Text>
        </View>
        <View style={ styles.metadataContainer }>
            <Text style={ styles.metadata }>{`Posted ${ timestamp } ago by ${ author }`}</Text>
        </View>
    </View>
);

export default PostCard;