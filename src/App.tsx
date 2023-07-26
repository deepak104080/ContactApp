/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  AppState,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddContact from './components/AddContact';
import ListContact from './components/ListContact';
import FlexPage from './components/FlexPage';
import Navigate from './components/Navigate';

import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [appState, setAppState] = useState(AppState.currentState);
  const [isMounted, setIsMounted] = useState(true);
  const handleAppStateChange = nextAppState => {
    console.log('app state - ', nextAppState);
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      setIsMounted(true);
      console.log('App Mounted.....');
    } else if (
      appState === 'active' &&
      nextAppState.match(/inactive|background/)
    ) {
      setIsMounted(false);
      console.log('App Not Mounted.....');
    }
    setAppState(nextAppState);
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const headerStyle = {
    headerStyle: {
      backgroundColor: '#00C9A7',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FlexPage">
          <Stack.Screen
            name="AddContact"
            component={AddContact}
            options={{title: 'Add New Contact', ...headerStyle}}
          />
          <Stack.Screen
            name="ListContact"
            component={ListContact}
            options={{title: 'List All Contacts', ...headerStyle}}
          />
          <Stack.Screen
            name="FlexPage"
            component={FlexPage}
            options={{title: 'Contact Manager', ...headerStyle}}
          />
        </Stack.Navigator>

        <Navigate />
      </NavigationContainer>
    </>

    // <View>
    //   <Text>test data... 2 </Text>
    // </View>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next: 1234567890
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#FEFEDF',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
