import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../store/store';
import Home from '../screens/Home';
import RestaurantDetail from '../screens/RestaurantDetail';
import OrderCompleted from '../screens/OrderCompleted';

const screenOptions = {
  headerShown: false,
};

const Stack = createStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
  </Stack.Navigator>
);

const RootNavigation = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNavigation;
