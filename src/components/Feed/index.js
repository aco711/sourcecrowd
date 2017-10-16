import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

import PostCard from '../../components/PostCard';

const Feed = ({ data, filter }) => {
    let postCards = data.postCards;
    if (filter !== undefined) {
        postCards = data.postCards.filter(filter);
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.feedContainer }>
                { postCards.map((post, i) => {
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
};

export default Feed;