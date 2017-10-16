import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const PostCard = ({ 
    post,
    navigation
}) => {
    const {
        title,
        type,
        timestamp,
        author,
        replies,
        station
    } = post;

    const card = (
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

    return (
        <TouchableHighlight
            onPress={ () => navigation.navigate('PostScreen', { post }) }
        >
            { card }
        </TouchableHighlight>
    );
};

export default PostCard;