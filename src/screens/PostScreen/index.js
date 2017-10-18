import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Button, FlatList } from 'react-native';
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
        const data = API.fetch();

        return (
            <View style={ styles.container }>
                <View style={ styles.postContainer }>
                    <TouchableHighlight
                        onPress={ () => navigate('StationScreen', { data }) }
                    >
                        <Text style={ styles.metadata }>{ post.station.toUpperCase() }</Text>
                    </TouchableHighlight>
                    <View style={ styles.titleContainer }>
                        <Text style={ styles.title }>{ post.title }</Text>
                    </View>
                    { post.body &&
                        <View style={ styles.bodyContainer }>
                            <Text style={ styles.body }>{ post.body }</Text>
                        </View>
                    }
                    <Text style={ styles.metadata }>{`Posted ${ moment(post.timestamp).fromNow() } by ${ post.author }`}</Text>
                    { post.replies &&
                        <View style={ styles.repliesContainer }> 
                            <Text style={ styles.metadata }>REPLIES</Text>
                            <FlatList 
                                data={ post.replies }
                                renderItem={ ({item}) =>
                                    <View style={ styles.replyContainer }>
                                        <Text style={ styles.replyBody }>{ item.body }</Text>
                                        <Text style={ styles.metadata }>Posted { moment(item.timestamp).fromNow() } by { item.author }</Text>
                                    </View>
                                }
                                keyExtractor={ (item, index) => index }
                            />
                        </View>
                    }
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