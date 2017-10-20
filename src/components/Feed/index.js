import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

import PostCard from '../../components/PostCard';

const Feed = ({ data, filter, navigator }) => {
    let posts = data.posts;
    if (filter !== undefined) {
        posts = data.posts.filter(filter);
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.feedContainer }>
                { posts.map((post, i) => {
                    return (
                        <View style={ styles.feedItem } key={ i }>
                            <PostCard
                                post={ post }
                                navigator={ navigator }
                            />
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default Feed;