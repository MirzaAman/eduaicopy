import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

import animation from '../../../assets/animation.json'
// firebase auth
import { auth,db } from '../Firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
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

const Signup = ({ navigation }) => {

  const [checked, setChecked] = React.useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const [load, setLoad] = useState(false)

  // handle signup
  const handleSignup = async () => {
    const data = {
      fname: firstName,
      lname: lastName,
      email: email,
      dob: dob,
      phone: phone
    };
  
    if (firstName && lastName && email && password && dob && phone && checked) {
      setLoad(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userId = user.uid;
  
        // Add user details to 'user-data' collection
        await addDoc(collection(db, 'user-data'), {
          userId: userId,
          ...data
        });
  
        // Add user ID and email to 'users' collection
        await addDoc(collection(db, 'users'), {
          userId: userId,
          email: email
        });
  
        // Introduce a delay of 3 seconds before setting load to false and navigating
        setTimeout(() => {
          setLoad(false);
          AsyncStorage.setItem('userAuth','true')
          navigation.replace('success');
        }, 3000);
      } catch (error) {
        setLoad(false);
        console.error('Error creating user: ', error);
        Alert.alert('Error', 'Something went wrong');
      }
    } else {
      Alert.alert('Validation', 'All fields are required and you must agree to the terms and conditions.');
    }
  };
  

  // <LottieView
  //       source={animation}
  //       autoPlay
  //       loop
  //       style={styles.animation}
  //     />

  return (
    <>
      {
        load ?
          <View style={styles.container2}>
            <LottieView
              source={animation}
              autoPlay
              loop
              style={styles.animation}
            />
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
                <Text style={{ fontSize: 25, fontWeight: '700' }}>Create Account</Text>
                <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 12 }}>Enter your personal data</Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 20, fontWeight: '700' }}>Enter your information</Text>
              <Text style={{ fontSize: 12, fontWeight: '400', marginTop: 8 }}>Provide accurate information for account setup</Text>
            </View>

            <ScrollView style={{ marginTop: 10, height: '30%' }}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  value={firstName}
                  onChangeText={setFirstName}
                />
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  value={lastName}
                  onChangeText={setLastName}
                />
                <TextInput
                  placeholder="Email Address"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  value={email}
                  onChangeText={setEmail}
                  inputMode='email'
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  value={password}
                  onChangeText={setPassword}
                />
                <TextInput
                  placeholder="Phone number"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  value={phone}
                  onChangeText={setPhone}
                />
                <TextInput
                  placeholder="DOB"
                  placeholderTextColor="black"
                  style={styles.textInput}
                  value={dob}
                  onChangeText={setDob}
                />
              </View>
              <View style={styles.checkboxWrapper}>
                <CustomCheckbox isChecked={checked} onPress={() => { setChecked(!checked); }} />
                <Text style={{ fontSize: 13 }}>Agree to EduAi's terms and conditions {checked} </Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }} >
                <TouchableOpacity style={{ backgroundColor: checked ? 'black' : 'grey', paddingTop: 20, paddingBottom: 20, paddingLeft: 70, paddingRight: 70, borderRadius: 30 }} onPress={handleSignup} disabled={checked ? false : true} >
                  <Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }} >Submit</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
      }
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 20
  },
  container2: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  textInput: {
    backgroundColor: '#f5f5f5',
    width: '80%',
    height: 50,
    marginTop: 10,
    paddingLeft: 18,
    color: 'black',
    fontSize: 15,
    borderRadius: 20,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
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
  animation: {
    width: 200,
    height: 200,
  },
});
