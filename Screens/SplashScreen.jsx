import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { MotiView } from '@motify/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingIndicator = ({ size }) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        loop: true,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: '#fff',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  );
};

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');
      const isUserLoggedIn = await AsyncStorage.getItem('userAuth');
      if (isUserLoggedIn === 'true') {
        navigation.replace('Homee'); // Navigate to Homee screen
      } else if (onboardingCompleted === 'true') {
        navigation.replace('usercontrolscreen'); // Navigate to user control screen
      } else {
        navigation.replace('Onboarding'); // Navigate to Onboarding screen
      }
      
    };

    const timer = setTimeout(() => {
      checkOnboardingStatus();
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LoadingIndicator size={100} />
      {/* <Text style={{color:'#fff',position:'absolute',bottom:110,fontSize:14,fontWeight:'600'}} >Edu Ai</Text> */}
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 2000 }}
        style={styles.textContainer}
      >
        <Text style={styles.text}>Powered by Xolved</Text>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#010100',
  },
  textContainer: {
    position: 'absolute',
    bottom: 90,
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});
