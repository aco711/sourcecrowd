import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Button } from 'react-native';
import styles from './styles';

import SplitHeader from '../../components/SplitHeader';
import Feed from '../../components/Feed';
import NoteCard from '../../components/NoteCard';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Ford Design Studio'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                <View style={ styles.splitHeaderContainer }>
                    <SplitHeader>
                        <View
                            onPress={ () => {} }
                            title="RECENT NOTES"
                        />
                        <View
                            onPress={ () => {} }
                            title="RECENT DISCUSSIONS"
                        />
                    </SplitHeader>
                </View>
                <View style={ styles.feedContainer }>
                    <Feed
                        title="MAKERBOT"
                        style={ styles.feed }
                    >
                        <NoteCard
                            title="There's a blue light that won’t turn off"
                            timestamp={ 20 }
                            author="Ken M."
                        />
                    </Feed>
                </View>
            </View>
        );
    }
}

export default HomeScreen;