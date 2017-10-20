import React, { Component } from 'react';
import { Text, View, TouchableHighlight, SectionList, ScrollView } from 'react-native';
import styles from './styles';
import capitalize from 'lodash.capitalize';
import moment from 'moment';

import BottomButton from '../../components/BottomButton';
import API from '../../lib/api';

export default class PostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flip: true
        };
    }

    render() {
        const { navigator, post } = this.props;
        const data = API.fetch();

        console.log(post.replies)

        return (
            <View style={ styles.container }>
                <ScrollView style={ styles.postContainer }>
                    <TouchableHighlight
                        onPress={ () => navigator.push({
                            screen: 'StationScreen',
                            passProps: { data }
                        }) }
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
                            { post.replies.map((item, i) => 
                                <View style={ styles.replyContainer } key={ i }>
                                    <Text style={ styles.replyBody }>{ item.body }</Text>
                                    <Text style={ styles.metadata }>{ `Posted ${ moment(item.timestamp).fromNow() } by ${ item.author }` }</Text>
                                </View>
                            )}
                            <View style={ styles.repliesBottomSpacer } />
                        </View>
                    }
                </ScrollView>
                <BottomButton 
                    title="Add a reply"
                    onPress={ () => navigator.push({
                        screen: 'AddReplyScreen',
                        passProps: { post, updateParent: () => { this.setState({ flip: !this.state.flip }) } }
                    }) }
                />
            </View>
        );
    }
}
