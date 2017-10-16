import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';

import Feed from '../../components/Feed';
import BottomButton from '../../components/BottomButton';

class HomeScreen extends Component {
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
                            filter={ datum => datum.type === 'note' }/>
                    </View>
                    <View style={ styles.feedContainer }>
                        <Text style={ styles.feedTitle }>
                            Discussions
                        </Text>
                        <Feed
                            data={ data } 
                            filter={ datum => datum.type === 'discussion' }
                        />
                    </View>
                </ScrollView>
                <BottomButton 
                    onPress={ () => navigate('AddPostScreen', { station: data.title }) }
                    title="Add a new note or discussion"
                />
            </View>
        );
    }
}

export default HomeScreen;