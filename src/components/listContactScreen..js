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
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';

import styles from '../../styles';
import {contacts} from '../../app';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListContactScreen extends Component {
  state = {
    contacts: [],
  };
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
            }}>
            <FlatList
              data={this.state.contacts}
              renderItem={({item}) => (
                <TouchableOpacity
                  key={'listContact_' + item.id}
                  style={styles.listItem}
                  onPress={() => {
                    this.props.navigation.push('DetailsContact', {
                      listContact: item,
                    });
                  }}>
                  <View style={{flex: 2,}}>
                    <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18}}>
                      {item.firstName}
                    </Text>
                    <View style={{flex: 1,}}>
                      <Text style={{}}>{item.lastName}</Text>
                    </View>
                    <View>
                        <Icon name="id-card-alt" size={40}/>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
