import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Icon,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';

// import {Ionicons} from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';

// import Icons from './Icons';

import {useNavigation} from '@react-navigation/native';

const Navigate = () => {
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={{selected: true}}
        accessibilityLabel="Home"
        testID="123"
        onPress={() => {
          navigation.navigate('FlexPage');
        }}
        style={{flex: 1}}>
        <View style={styles.bottombarbox}>
          <FontAwesome name="home" color="#00C9A7" size={30} />
          <Text style={{color: '#00C9A7'}}>Home</Text>
        </View>

        {/* <Ionicons name="md-home" size={24} color="#8e8e93" /> */}
      </TouchableOpacity>
      {/* <View>
        <Text>Ionicons Icons</Text>
        <Icons name="circle" />
        <Icon name="md-bicycle" />
        <Entypo name="list" size={55} color="#0D6EFD" />
      </View> */}

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={{selected: true}}
        accessibilityLabel="AddContact"
        testID="123"
        onPress={() => {
          navigation.navigate('AddContact');
        }}
        style={{flex: 1}}>
        <View style={styles.bottombarbox}>
          <FontAwesome name="plus" color="#00C9A7" size={30} />
          <Text style={{color: '#00C9A7'}}>Add Contact</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={{selected: true}}
        accessibilityLabel="ListContact"
        testID="123"
        onPress={() => {
          navigation.navigate('ListContact');
        }}
        style={{flex: 1}}>
        <View style={styles.bottombarbox}>
          <FontAwesome name="list" color="#00C9A7" size={30} />
          <Text style={{color: '#00C9A7'}}>ListContact</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottombarbox: {
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: '#00C9A7',
    borderWidth: 1,
    // backgroundColor: '#F3C5FF',
    backgroundColor: '#1784A2',
  },
});

export default Navigate;
