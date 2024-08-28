import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, Easing, cancelAnimation } from 'react-native-reanimated';
// Stack
import HomeScreen from '../Screens/Stack/HomeScreen';
import SettingsScreen from '../Screens/Stack/SettingsScreen';
import RecentTest from '../Screens/Stack/RecentTest';
import CompetativeExam from '../Screens/Stack/CompetativeExam';
import DashBoardScreen from '../Screens/Stack/DashBoardScreen';

const Tab = createBottomTabNavigator();

const AnimatedSettingsIcon = ({ color, size, focused }) => {
  const rotation = useSharedValue(0);

  useFocusEffect(
    React.useCallback(() => {
      if (focused) {
        rotation.value = withRepeat(
          withTiming(360, {
            duration: 2000,
            easing: Easing.linear,
          }),
          -1,
          false
        );
      } else {
        cancelAnimation(rotation);
        rotation.value = 0;
      }
    }, [focused])
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <Animated.View style={[{ alignItems: 'center', justifyContent: 'center' }, animatedStyle]}>
      <MaterialIcons name="settings" size={size} color={color} />
    </Animated.View>
  );
};

const BottomTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Test') {
            iconName = 'assignment';
          } else if (route.name === 'Exams') {
            iconName = 'assessment';
          } else if (route.name === 'Dashboard') {
            iconName = 'dashboard';
          }

          if (route.name === 'Settings') {
            return <AnimatedSettingsIcon color={color} size={size} focused={focused} />;
          }

          return <MaterialIcons name={iconName} size={25} color={color} />;
        },

        tabBarActiveTintColor: '#0056D2',
        tabBarInactiveTintColor: '#000',
        
        
        tabBarStyle: {
          backgroundColor: '#d3dae0',
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          height: 75,
          paddingBottom: 5,
          paddingTop: 5,
          // marginBottom: 15,
          borderRadius: 20,
          // marginRight: 20,
          // marginLeft: 20,
          // position: 'absolute',
          // elevation: 0, 
        },
        tabBarLabel: () => null,
      })}

    >
      <Tab.Screen name="Dashboard" component={DashBoardScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Test" component={RecentTest} options={{ headerShown: false }} />
      <Tab.Screen name="Exams" component={CompetativeExam} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}; 

export default BottomTabNavigator;
