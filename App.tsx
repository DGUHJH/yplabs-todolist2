import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import CommonModal from './src/components/Modal';
import createStore from './src/features';
import DetailsScreen from './src/screens/Details';
import FeedScreen from './src/screens/Feed';
import HomeScreen from './src/screens/Home';

const Stack = createNativeStackNavigator();
const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          {/* <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} /> */}
          <Stack.Screen
            name="Feed"
            component={FeedScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
