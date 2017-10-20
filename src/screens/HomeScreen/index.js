import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Button, ScrollView, DeviceEventEmitter } from 'react-native';
import styles from './styles';
import Beacons from 'react-native-beacons-manager';

import Feed from '../../components/Feed';
import API from '../../lib/api';
import { settings } from '../../config/settings';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beaconDidRange: false,
            identifier: settings.identifier,
            uuid: settings.uuid,
        }
    }

    componentWillMount() {
        Beacons.requestWhenInUseAuthorization();
        const region = {
          identifier: this.state.identifier,
          uuid: this.state.uuid
        };
        Beacons.startRangingBeaconsInRegion(region);
        Beacons.startUpdatingLocation();
    }

    componentDidMount() {
        const { navigator } = this.props;

        this.beaconsDidRange = DeviceEventEmitter.addListener(
            'beaconsDidRange',
            (data) => {
                const { beaconDidRange } = this.state;

                if (!beconDidRange) {
                    navigator.showModal({
                        screen: 'ModalScreen',
                        title: 'New Station',
                        passProps: {
                            station: 'MakerBot Replicator',
                            navigator: navigator,
                            dismissCallback: this.handleModalDismiss
                        }
                    });
                    this.setState({ beaconDidRange: true });
                }
            }
        );
    }

    handleModalDismiss = () => {
        const { navigator } = this.props;
        const data = API.fetch();
        navigator.dismissModal();
        setTimeout(() => {
            // i have no idea why this is necessary
            navigator.push({
                screen: 'StationScreen', 
                title: 'MakerBot Replicator',
                passProps: { data, navigator }
            });
        }, 500)
    }

    render() {
        const { navigator } = this.props;
        const data = API.fetch();
        
        return (
            <View style={ styles.container }>
                <ScrollView style={ styles.scrollViewContainer }>
                    <View style={ styles.titleContainer }>
                        <Text style={ styles.title }>RECENTLY VISITED STATIONS</Text>
                    </View>
                    <View style={ styles.feedTitleContainer }>
                        <TouchableHighlight 
                            style={ styles.feedTitleHighlight } 
                            onPress={ () => navigator.push({ screen: 'StationScreen', passProps: { data } }) }
                        >
                            <Text style={ styles.feedTitle }>
                                { data.title }
                                <Text style={ styles.newPosts }>{ ` • ${ data.newPosts } new posts` }</Text>
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <Feed
                        data={ data }
                        navigator={ navigator }
                    />
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;