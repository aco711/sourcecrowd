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

    render() {
        const { navigator, data } = this.props;

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
                            navigator={ navigator }
                        />
                    </View>
                    <View style={ styles.feedContainer }>
                        <Text style={ styles.feedTitle }>
                            Discussions
                        </Text>
                        <Feed
                            data={ data } 
                            filter={ datum => datum.type === 'discussion' }
                            navigator={ navigator }
                        />
                    </View>
                    <View style={ styles.repliesBottomSpacer } />
                </ScrollView>
                <BottomButton 
                    onPress={ () => navigator.push({
                        screen: 'AddPostScreen',
                        passProps: {
                            data,
                            updateParent: () => { this.setState({ flip: !this.state.flip }) }
                        }
                    }) }
                    title="Add a new note or discussion"
                />
            </View>
        );
    }
}

export default StationScreen;