/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import ListContactScreen from './src/components/listContactScreen.';
import UpdateContactScreen from './src/components/updateContactScreen';
import DetailsContactScreen from './src/components/detailsContactScreen';

const Stack = createStackNavigator();
function Load({navigation, route}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="listContact"
        mode="card"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#f15322'},
          mode: 'card',
          gestureDirection: 'horizontal',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MyAccount')}
              style={{marginRight: 10, paddingHorizontal: 10}}>
              <Icon name="user" color={'white'} size={30} />
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen
          name="ListContact"
          component={ListContact}
          mode="card"
          options={{
            title: 'Liste des Contacts',
          }}
        />
        <Stack.Screen
          name="DetailsContact"
          component={DetailsContact}
          options={{
            // headerStyleInterpolator: forFade,
            title: 'Détails des contacts',
            animationTypeForReplace: 'push',
            headerRight: null,
          }}
        />
        <Stack.Screen
          name="UpdateContact"
          component={UpdateContact}
          mode="card"
          options={{
            // headerStyleInterpolator: forFade,
            title: 'Modifier les contacts ',
            mode: 'card',
            gestureDirection: 'horizontal',

            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ListContact({navigation}) {
  return <ListContactScreen navigation={navigation} />;
}

function DetailsContact({navigation, route}) {
    navigation.setOptions({title:route.params.name})
    return <DetailsContactScreen navigation={navigation} />;
}

function UpdateContact({navigation}) {
  return <UpdateContactScreen navigation={navigation} />;
}

export default Load;
