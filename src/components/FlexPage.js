import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Switch,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

const FlexPage = ({navigation}) => {
  const [flexDirection, setflexDirection] = useState('column');

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const test = value => {
    console.log('hit test', value);
    setflexDirection(value);
  };

  //pressable
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }
  //pressable ends

  const navigateToAddContact = () => {
    navigation.navigate('AddContact');
  };

  const navigateToListContact = () => {
    navigation.navigate('ListContact');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 0, flex: 1}}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle="dark-content"
          showHideTransition="none"
          hidden={false}
        />
        <View style={styles.column}>
          <TouchableOpacity
            key="value"
            onPress={navigateToAddContact}
            style={[styles.button]}>
            <Text style={[styles.buttonLabel, flexDirection === 'row']}>
              Add Contact
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            key="value1"
            onPress={navigateToListContact}
            style={[styles.button]}>
            <Text style={[styles.buttonLabel, flexDirection === 'row']}>
              List Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    // backgroundColor: 'aliceblue',
  },
  box: {
    // width: 50,
    // height: 50,
  },
  column: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 4,
    backgroundColor: '#F3C5FF',
    marginVertical: 10,
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default FlexPage;
