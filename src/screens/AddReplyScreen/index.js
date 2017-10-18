import React, { Component } from 'react';
import { Text, View, TextInput, Picker } from 'react-native';
import styles from './styles';

import BottomButton from '../../components/BottomButton';
import API from '../../lib/api';

class AddPostScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `New Reply in ${ navigation.state.params.post.title }`
    });

    constructor(props) {
        super(props);
        this.state = {
            bodyText: ''
        };
    }

    submitReply = () => {
        const { goBack } = this.props.navigation;
        const { post } = this.props.navigation.state.params;
        const { bodyText } = this.state;

        API.addReply(post, {
            body: bodyText,
            author: 'Me',
            timestamp: Date.now(),
        });

        goBack();
    }

    render() {
        const { navigate } = this.props.navigation;
        const { post } = this.props.navigation.state.params;

        return (
            <View style={ styles.container }>
                <View style={ styles.formContainer }>
                    <View style={ styles.postTitleContainer }>
                        <Text style={ styles.postTitle }>Reply to: { post.title }</Text>
                    </View>
                    <View style={ styles.bodyInputContainer }>
                        <TextInput
                            style={ styles.bodyInput }
                            placeholder="Add your reply here"
                            multiline={ true }
                            onChangeText={ (text) => { this.setState({bodyText: text}) }}
                        />
                    </View>
                </View>
                <BottomButton
                    onPress={ this.submitReply }
                    title={`Submit reply`}
                />
            </View>
        );
    }
}

export default AddPostScreen;