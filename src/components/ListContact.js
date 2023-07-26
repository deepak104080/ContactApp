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
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListContact = ({navigation}) => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    // const name = await AsyncStorage.getItem('name');
    // const number = await AsyncStorage.getItem('number');
    // const email = await AsyncStorage.getItem('email');

    const contact = await AsyncStorage.getItem('contact');

    console.log(
      'ListContact - Contact list from Storage - ',
      JSON.parse(contact),
    );

    setList(JSON.parse(contact));
  };

  useEffect(() => {
    fetchData();
    //console.log('ListContact - fetch data called...');
  }, []);

  useEffect(() => {
    console.log('ListContact - On State list update', list);
  }, [list]);

  const navigateToAdd = () => {
    navigation.navigate('AddContact');
  };

  const deleteAll = async () => {
    await AsyncStorage.clear();
    setList([]);
  };

  const deleteOne = async id => {
    console.log(id);

    let contactTemp = [];

    contactTemp = list.filter(item => {
      return item.id !== id;
    });

    try {
      //console.log('AddContact - contactTemp', contactTemp);
      await AsyncStorage.setItem('contact', JSON.stringify(contactTemp));
    } catch (error) {
      console.log(error);
    }
    setList(contactTemp);
  };

  const searchOne = async () => {
    console.log('Search........');
    // await AsyncStorage.clear();
    // setList([]);
  };

  const Item = ({title}) => (
    <View style={styles.item} key={title}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View>
      <View style={styles.searchbar}>
        <FontAwesome
          name="search"
          color="#0D0D0D"
          size={30}
          style={styles.searchicon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={() => searchOne()}
        />
        <TouchableOpacity style={styles.button} onPress={deleteAll}>
          <FontAwesome name="recycle" color="#00C9A7" size={55} />
        </TouchableOpacity>
      </View>

      {/* <Text style={styles.successtext}>Success</Text> */}

      {/* <TouchableOpacity style={styles.button} onPress={navigateToAdd}>
        <Text>Add New Contact</Text>
      </TouchableOpacity> */}

      <FlatList
        data={list}
        renderItem={({item}) => (
          <View style={styles.item} key={item.number + item.name}>
            <View style={styles.contactbar}>
              <FontAwesome name="bandcamp" color="#00C9A7" size={55} />
              <View style={styles.contactbartext}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.title}>{item.number}</Text>
                <Text style={styles.title}>{item.email}</Text>
              </View>
              <FontAwesome
                name="recycle"
                color="#00C9A7"
                size={25}
                onPress={() => deleteOne(item.id)}
              />
            </View>
          </View>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    // backgroundColor: '#dddddd',
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 20,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    // backgroundColor: '#FF6347',
    // backgroundColor: '#F3C5FF',
    alignItems: 'center',
    marginTop: 10,
  },
  successtext: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 15,
    padding: 10,
    flexGrow: 1,
    flexShrink: 0,
  },
  searchbar: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchicon: {
    paddingTop: 10,
  },
  contactbar: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  contactbartext: {
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default ListContact;
