import React, { Component } from 'react';
import { Text, View, TextInput, Picker, Keyboard } from 'react-native';
import styles from './styles';

import BottomButton from '../../components/BottomButton';
import API from '../../lib/api';

class AddPostScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `New Post in ${ navigation.state.params.data.title }`
    });

    constructor(props) {
        super(props);
        this.state = {
            titleText: '',
            bodyText: '',
            type: 'note',
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

    submitPost = () => {
        const { goBack } = this.props.navigation;
        const { data, updateParent } = this.props.navigation.state.params;
        const { titleText, bodyText, type } = this.state;

        API.addPost({
            title: titleText,
            type: type,
            body: bodyText,
            author: 'Me',
            timestamp: Date.now(),
            station: data.title
        });

        updateParent();
        goBack();
    }

    render() {
        const { navigate } = this.props.navigation;
        const { data } = this.props.navigation.state.params;

        return (
            <View style={ styles.container }>
                <View style={ styles.formContainer }>
                    <View style={ styles.titleInputContainer }>
                        <TextInput
                            style={ styles.titleInput }
                            placeholder={`New Post in ${ data.title }`}
                            onChangeText={ (text) => { this.setState({titleText: text}) }}
                            multiline={ true }
                        />
                    </View>
                    <View style={ styles.bodyInputContainer }>
                        <TextInput
                            style={ styles.bodyInput }
                            placeholder="Add a description"
                            multiline={ true }
                            onChangeText={ (text) => { this.setState({bodyText: text}) }}
                        />
                    </View>
                    <View>
                        <Picker
                            selectedValue={ this.state.type }
                            onValueChange={(itemValue) => this.setState({type: itemValue})}>
                            <Picker.Item label="Note" value="note" />
                            <Picker.Item label="Discussion" value="discussion" />
                        </Picker>
                    </View>
                </View>
                <BottomButton
                    onPress={ this.submitPost }
                    title={`Submit ${ this.state.type }`}
                    keyboardUp={ this.state.keyboardUp }
                />
            </View>
        );
    }
}

export default AddPostScreen;