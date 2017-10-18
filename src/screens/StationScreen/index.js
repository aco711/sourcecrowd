import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';

import Feed from '../../components/Feed';
import BottomButton from '../../components/BottomButton';

class StationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flip: true
        };
    }

    static navigationOptions = ({ navigation }) => {
        const { data } = navigation.state.params;
        return {
            title: data.title
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const { data } = this.props.navigation.state.params;

        return (
            <View style={ styles.container }>
                <ScrollView style={ styles.scrollViewContainer }>
                    <View style={ styles.feedContainer }>
                        <Text style={ styles.feedTitle }>
                            Recent Notes
                        </Text>
                        <Feed
                            data={ data } 
                            filter={ datum => datum.type === 'note' }
                            navigation={ this.props.navigation }
                        />
                    </View>
                    <View style={ styles.feedContainer }>
                        <Text style={ styles.feedTitle }>
                            Discussions
                        </Text>
                        <Feed
                            data={ data } 
                            filter={ datum => datum.type === 'discussion' }
                            navigation={ this.props.navigation }
                        />
                    </View>
                    <View style={ styles.repliesBottomSpacer } />
                </ScrollView>
                <BottomButton 
                    onPress={ () => navigate('AddPostScreen', { data, updateParent: () => { this.setState({ flip: !this.state.flip }) } }) }
                    title="Add a new note or discussion"
                />
            </View>
        );
    }
}

export default StationScreen;