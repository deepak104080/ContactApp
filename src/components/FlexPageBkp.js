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

const FlexPageBkp = () => {
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
        <Text style={styles.label}>flexDirection</Text>
        {isEnabled && (
          <View style={styles.row}>
            {['column', 'row', 'row-reverse', 'column-reverse'].map(value => (
              <TouchableOpacity
                key={value}
                onPress={() => test(value)}
                style={[
                  styles.button,
                  flexDirection === value && styles.selected,
                ]}>
                <Text
                  style={[
                    styles.buttonLabel,
                    flexDirection === value && styles.selectedLabel,
                  ]}>
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <View style={[styles.container, {['flexDirection']: flexDirection}]}>
          <View style={[styles.box, {backgroundColor: 'powderblue'}]}>
            <View>
              <Text style={styles.text}>Add New Contact</Text>
            </View>
          </View>
          <View style={[styles.box, {backgroundColor: 'skyblue'}]}>
            <SafeAreaView>
              <TextInput style={styles.input} placeholder="Enter Your Name" />
              <Text style={styles.errortext}>name</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter Your Contact Number"
              />
              <Text style={styles.errortext}>number</Text>

              <TextInput style={styles.input} placeholder="Enter Your Email" />
              <Text style={styles.errortext}>email</Text>

              <TouchableOpacity style={styles.button}>
                <Text>Add Contact</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
          <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
        </View>

        <ActivityIndicator size="large" />

        <Pressable
          onPress={() => {
            setTimesPressed(current => current + 1);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>

        {/* <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView> */}
      </View>

      <Image
        style={styles.image}
        source={{
          uri: 'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'aliceblue',
  },
  box: {
    // width: 50,
    // height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
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

export default FlexPageBkp;
