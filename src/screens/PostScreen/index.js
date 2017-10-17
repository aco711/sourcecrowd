import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Button, ScrollView } from 'react-native';
import styles from './styles';
import capitalize from 'lodash.capitalize';
import moment from 'moment';

import BottomButton from '../../components/BottomButton';
import API from '../../lib/api';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { post } = navigation.state.params;

        return {
            title: `${ capitalize(post.type) } in ${ post.station }`
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const { post } = this.props.navigation.state.params;
        const makerbotData = API.fetch();

        return (
            <View style={ styles.container }>
                <View style={ styles.postContainer }>
                    <TouchableHighlight
                        onPress={ () => navigate('StationScreen', { data: makerbotData }) }
                    >
                        <Text style={ styles.metadata }>{ post.station.toUpperCase() }</Text>
                    </TouchableHighlight>
                    <View style={ styles.titleContainer }>
                        <Text style={ styles.title }>{ post.title }</Text>
                    </View>
                    <Text style={ styles.metadata }>{`Posted ${ moment(post.timestamp).fromNow() } by ${ post.author }`}</Text>
                </View>
                <BottomButton 
                    title="Add a reply"
                    onPress={ () => navigate('AddReplyScreen', { post }) }
                />
            </View>
        );
    }
}

export default HomeScreen;