import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

import PostCard from '../../components/PostCard';

const Feed = ({ data, onPress }) => (
    <View style={ styles.container }>
        <View style={ styles.titleContainer }>
            <TouchableHighlight style={ styles.titleHighlight } onPress={ onPress }>
                <Text style={ styles.title }>
                    { data.title }
                    <Text style={ styles.newPosts }>{ ` • ${ data.newPosts } new posts` }</Text>
                </Text>
            </TouchableHighlight>
        </View>
        <View style={ styles.feedContainer }>
            { data.postCards.map((post, i) => {
                return (
                    <View style={ styles.feedItem } key={ i }>
                        <PostCard
                            title={ post.title }
                            type={ String(post.type).toUpperCase() }
                            timestamp={ post.timestamp }
                            author={ post.author }
                        />
                    </View>
                );
            })}
        </View>
    </View>
);

export default Feed;