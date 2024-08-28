// MainNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Stack/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import SplashScreen from '../Screens/SplashScreen';
import OnboardScreen from '../Screens/OnboardScreen'
import CExamHomeScreen from '../Screens/Stack/CExamHomeScreen'

// user Auth
import Login from '../Screens/Auth/Screens/Login';
import Signup from '../Screens/Auth/Screens/Signup';
import UserControlScreen from '../Screens/Auth/Screens/UserControllerScreen'
import SuccessFullScreen from '../Screens/Auth/Screens/SuccessFullScreen'
import PhoneVerifyScreen from '../Screens/Auth/Screens/PhoneVerifyScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
      <Stack.Screen name="Onboarding" component={OnboardScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Homee" component={BottomTabNavigator} options={{headerShown:false}} />
      <Stack.Screen name="Cexam" component={CExamHomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
      <Stack.Screen name='usercontrolscreen' component={UserControlScreen} options={{headerShown:false}} />
      <Stack.Screen name='success' component={SuccessFullScreen} options={{headerShown:false}} />
      <Stack.Screen name='phone' component={PhoneVerifyScreen} options={{headerShown:false}} />
      </Stack.Navigator>
  );
};

export default MainNavigator;
