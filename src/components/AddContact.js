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
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-gesture-handler';

const AddContact = ({navigation}) => {
  let dataPattern = {
    name: '',
    number: '',
    email: '',
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState(dataPattern);

  const onAddClick = () => {
    let status = validate();
    status && onPress();
  };

  const validate = () => {
    let tempErrors = {};

    if (name.length === 0) {
      tempErrors.name = 'Name Empty';
    }
    if (number.length === 0) {
      tempErrors.number = 'Number Empty';
    }
    if (email.length === 0) {
      tempErrors.email = 'Email Empty';
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const onPress = async () => {
    let temp = [];
    try {
      temp = (await AsyncStorage.getItem('contact')) || [];
      //console.log('AddContact - Data from Storage - ', JSON.parse(temp));
    } catch (error) {
      console.log(error);
    }

    const obj = {
      name,
      number,
      email,
      id: parseInt(Math.random() * 10000000),
    };

    let contactTemp = [];

    if (temp.length === 0) {
      contactTemp[0] = obj;
    } else {
      contactTemp = [...JSON.parse(temp), obj];
    }

    try {
      //console.log('AddContact - contactTemp', contactTemp);
      await AsyncStorage.setItem('contact', JSON.stringify(contactTemp));
    } catch (error) {
      console.log(error);
    }

    setName('');
    setNumber('');
    setEmail('');
    navigateToList();
  };

  const navigateToList = () => {
    navigation.navigate('ListContact');
  };

  const image = {
    uri: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };

  return (
    <>
      <SafeAreaView>
        {/* <View style={{padding: 0, flex: 1}}>
          <View style={[styles.container, {['flexDirection']: 'column'}]}> */}
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter Your Name"
        />
        <Text style={styles.errortext}>{errors.name}</Text>

        <TextInput
          style={styles.input}
          onChangeText={setNumber}
          value={number}
          placeholder="Enter Your Contact Number"
        />
        <Text style={styles.errortext}>{errors.number}</Text>

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Your Email"
        />
        <Text style={styles.errortext}>{errors.email}</Text>

        <TouchableOpacity style={styles.button} onPress={onAddClick}>
          <Text style={styles.buttonLabel}>Add Contact</Text>
        </TouchableOpacity>

        {/* <View style={[styles.box, {backgroundColor: 'steelblue'}]} /> */}
        {/* </View>
        </View> */}
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
        {/* <View>
          <Text style={styles.text}>Add New Contact</Text>
        </View> */}

        {/* </ImageBackground> */}

        {/* <Button
          onPress={navigateToList}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    marginTop: 10,
    borderRadius: 15,
    padding: 10,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 4,
    backgroundColor: '#F3C5FF',
    //backgroundColor: '#FF6347',
    marginVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  errortext: {
    color: 'red',
  },
});

export default AddContact;
