import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Button, ScrollView } from 'react-native';
import styles from './styles';

import SplitHeader from '../../components/SplitHeader';
import Feed from '../../components/Feed';

import makerbotData from '../../assets/data/makerbot.json';

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
                    <View style={ styles.feedTitleContainer }>
                        <TouchableHighlight 
                            style={ styles.feedTitleHighlight } 
                            onPress={ () => navigate('StationScreen', { data: makerbotData }) }
                        >
                            <Text style={ styles.feedTitle }>
                                { makerbotData.title }
                                <Text style={ styles.newPosts }>{ ` • ${ makerbotData.newPosts } new posts` }</Text>
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <Feed data={ makerbotData } />
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;