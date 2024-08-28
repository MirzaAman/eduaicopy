import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/config';
import LottieView from 'lottie-react-native';
import animation from '../../../assets/animation.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomCheckbox = ({ isChecked, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
    <MaterialIcons
      name={isChecked ? 'check-box' : 'check-box-outline-blank'}
      size={24}
      color={isChecked ? '#4630EB' : '#ccc'}
      style={styles.checkbox}
    />
  </TouchableOpacity>
);

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {

    if (email && password) {
      try {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            setTimeout(() => {
              setLoading(false);
              AsyncStorage.setItem('userAuth', 'true')
              navigation.replace('Homee');
            }, 3000);
          })
          .catch(error => {
            setLoading(false);
            console.error('Error signing in: ', error);
            Alert.alert('Something went wrong')
            // Display an error message to the user
          });
      } catch (error) {
        setLoading(false)
        Alert.alert('Something went wrong')
      }
    } else {
      setLoading(false)
      Alert.alert("Please enter you credentials")
    }
  };

  return (
    <>
      {
        loading ?
          <View style={styles.loadingContainer}>
            <LottieView source={animation} autoPlay loop style={styles.animation} />
          </View>
          :
          <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => { navigation.replace('usercontrolscreen'); }}>
                  <MaterialIcons name="arrow-back" size={35} style={{ fontWeight: '600' }} />
                </TouchableOpacity>
                <MaterialIcons name="person-2" size={35} />
              </View>
              <View style={styles.textContainer}>
                <Text style={{ fontSize: 25, fontWeight: '700' }}>Access your Account</Text>
                <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 12 }}>Enter your login credentials</Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 20, fontWeight: '700' }}>Enter your information</Text>
              <Text style={{ fontSize: 12, fontWeight: '400', marginTop: 8 }}>Provide accurate information for account setup</Text>
            </View>
            <ScrollView style={{ marginTop: 10, height: '25%' }}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Email Address"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity onPress={handleLogin} style={styles.forgotPasswordContainer}>
                <Text style={{ fontSize: 14, color: '#4630EB', textDecorationLine: 'underline' }}>Forgot Password?</Text>
              </TouchableOpacity>
            </ScrollView>
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }} >
              <TouchableOpacity style={{ backgroundColor: 'black', paddingTop: 20, paddingBottom: 20, paddingLeft: 70, paddingRight: 70, borderRadius: 30 }} onPress={handleLogin} disabled={loading}>
                <Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }} >Login</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
      }
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  appBar: {
    height: 150,
    width: '100%',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: 10,
  },
  iconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textContainer: {
    paddingLeft: 40,
    marginTop: 20,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: 'center',
    width: '100%'
  },
  textInput: {
    backgroundColor: '#f5f5f5',
    width: '80%',
    height: 50,
    marginTop: 20,
    paddingLeft: 18,
    color: 'black',
    fontSize: 15,
    borderRadius: 20,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    paddingLeft: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
    color: 'black',
    fontSize: 25
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  animation: {
    width: 200,
    height: 200,
  },
});
