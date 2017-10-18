import React, { Component } from 'react';
import { Text, View, TextInput, Keyboard } from 'react-native';
import styles from './styles';

import BottomButton from '../../components/BottomButton';
import API from '../../lib/api';

class AddReplyScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `New Reply in ${ navigation.state.params.post.title }`
    });

    constructor(props) {
        super(props);
        this.state = {
            bodyText: '',
            keyboardUp: false
        };
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardDidShow = () => {
        this.setState({
            keyboardUp: true
        });
    }

    keyboardDidHide = () => {
        this.setState({
            keyboardUp: false
        });
    }

    submitReply = () => {
        const { goBack } = this.props.navigation;
        const { post, updateParent } = this.props.navigation.state.params;
        const { bodyText } = this.state;

        API.addReply(post, {
            body: bodyText,
            author: 'Me',
            timestamp: Date.now(),
        });

        updateParent();
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
                            onChangeText={ (text) => { this.setState({bodyText: text}) }}
                            onSubmitEditing={ () => this.submitReply() }
                        />
                    </View>
                </View>
                <BottomButton
                    onPress={ this.submitReply }
                    title={`Submit reply`}
                    keyboardUp={ this.state.keyboardUp }
                />
            </View>
        );
    }
}

export default AddReplyScreen;