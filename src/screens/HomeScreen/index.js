import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Button, ScrollView } from 'react-native';
import styles from './styles';

import Feed from '../../components/Feed';
import API from '../../lib/api';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Ford Design Studio'
    }

    render() {
        const { navigate } = this.props.navigation;
        const data = API.fetch();
        
        return (
            <View style={ styles.container }>
                <ScrollView style={ styles.scrollViewContainer }>
                    <View style={ styles.titleContainer }>
                        <Text style={ styles.title }>RECENTLY VISITED STATIONS</Text>
                    </View>
                    <View style={ styles.feedTitleContainer }>
                        <TouchableHighlight 
                            style={ styles.feedTitleHighlight } 
                            onPress={ () => navigate('StationScreen', { data }) }
                        >
                            <Text style={ styles.feedTitle }>
                                { data.title }
                                <Text style={ styles.newPosts }>{ ` • ${ data.newPosts } new posts` }</Text>
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <Feed
                        data={ data } 
                        navigation={ this.props.navigation }
                    />
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;