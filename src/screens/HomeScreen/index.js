import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Button, ScrollView } from 'react-native';
import styles from './styles';

import SplitHeader from '../../components/SplitHeader';
import Feed from '../../components/Feed';
import PostCard from '../../components/PostCard';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Ford Design Studio'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                <View style={ styles.titleContainer }>
                    <Text style={ styles.title }>RECENTLY VISITED STATIONS</Text>
                </View>
                <ScrollView>
                    <Feed
                        title="Makerbot"
                        newPosts={ 2 }
                    >
                        <PostCard
                            title="There's a blue light that won’t turn off"
                            type="NOTE"
                            timestamp={ 20 }
                            author="Ken M."
                        />
                    </Feed>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;