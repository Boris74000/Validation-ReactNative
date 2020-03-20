/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import styles from '../../styles'

export default class DetailsContactScreen extends Component {
    navigation = null;
    state = {

        contacts:[],

    }

    constructor(props) {
        super(props);
        this.state.contacts = contacts;
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
                <SafeAreaView style={{flex: 1}}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                        }}>
                        <Text>Details</Text>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
}
