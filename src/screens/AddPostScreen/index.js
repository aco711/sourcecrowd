import React, { Component } from 'react';
import { Text, View, TextInput, Picker } from 'react-native';
import styles from './styles';

import BottomButton from '../../components/BottomButton';

class AddPostScreen extends Component {
    static navigationOptions = () => ({
        title: 'New Post'
    });

    constructor(props) {
        super(props);
        this.state = {
            titleText: '',
            descriptionText: '',
            type: 'note'
        };
    }

    submitPost = () => {
        const { navigate } = this.props.navigation;

        navigate('AddPostScreen', { station: data.title })
    }

    render() {
        const { navigate } = this.props.navigation;
        const { station } = this.props.navigation.state.params;

        return (
            <View style={ styles.container }>
                <View style={ styles.titleInputContainer }>
                    <TextInput
                        style={ styles.titleInput }
                        placeholder={`New Post in ${ station }`}
                        onChangeText={ (text) => { this.setState({titleText: text}) }}
                        multiline={ true }
                    />
                </View>
                <View style={ styles.descriptionInputContainer }>
                    <TextInput
                        style={ styles.descriptionInput }
                        placeholder="Add a description"
                        multiline={ true }
                        onChangeText={ (text) => { this.setState({descriptionText: text}) }}
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
                <BottomButton
                    onPress={ this.submitPost }
                    title={`Submit ${ this.state.type }`}
                />
            </View>
        );
    }
}

export default AddPostScreen;