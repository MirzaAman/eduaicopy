// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, Alert } from 'react-native';
// import { auth, phoneAuthProvider } from '../Firebase/config';
// import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
// import { firebaseConfig } from '../Firebase/config';

// const PhoneVerifyScreen = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [verificationId, setVerificationId] = useState(null);
//   const [keyboardStatus, setKeyboardStatus] = useState('flex');
//   const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
//   const recaptchaVerifierRef = useRef(null);

//   useEffect(() => {
//     const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
//       setKeyboardStatus('none');
//     });
//     const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
//       setKeyboardStatus('flex');
//     });

//     const verifier = new FirebaseRecaptchaVerifierModal({
//       title: 'Prove you are human!',
//       cancelLabel: 'Close',
//     });
//     setRecaptchaVerifier(verifier);
//     recaptchaVerifierRef.current = verifier;

//     return () => {
//       showSubscription.remove();
//       hideSubscription.remove();
//     };
//   }, []);

//   const handleSendCode = async () => {
//     try {
//       const verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifierRef.current);
//       setVerificationId(verificationId);
//       Alert.alert("Verification code sent to your phone.");
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     }
//   };

//   const handleVerifyCode = async () => {
//     try {
//       const credential = phoneAuthProvider.credential(verificationId, verificationCode);
//       await auth.signInWithCredential(credential);
//       Alert.alert("Success", "Phone number verified successfully!");
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={{ fontSize: 30, width: '100%', textAlign: 'center', fontWeight: '700', display: keyboardStatus }}>Phone Number Verification</Text>
//       <Text style={{ fontSize: 20, width: '80%', textAlign: 'center', fontWeight: '500', marginTop: 30, display: keyboardStatus }}>Enter your phone number and we will send you a verification code.</Text>
//       <View style={styles.inputContainer}>
//         <View style={styles.inputBox}>
//           <Text style={{ fontSize: 18, fontWeight: '500' }}>Phone Number</Text>
//           <TextInput
//             placeholder='Enter your phone number'
//             placeholderTextColor={'black'}
//             style={styles.input}
//             inputMode='tel'
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//           />
//         </View>
//         <View style={styles.inputBox}>
//           <Text style={{ fontSize: 18, fontWeight: '500' }}>Verification Code</Text>
//           <TextInput
//             placeholder='Enter the OTP code'
//             placeholderTextColor={'black'}
//             style={styles.input}
//             inputMode='numeric'
//             value={verificationCode}
//             onChangeText={setVerificationCode}
//           />
//         </View>
//         {verificationId ? (
//           <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
//             <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>Verify</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.button} onPress={handleSendCode}>
//             <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>Send Code</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//       <View style={styles.bottomAction}>
//         <Text style={{ fontSize: 15, fontWeight: '400' }}>Didn't receive the code?</Text>
//         <TouchableOpacity>
//           <Text style={{ fontSize: 15, fontWeight: '500', color: '#1a4282', marginTop: 10 }}>Resend OTP</Text>
//         </TouchableOpacity>
//         <Text style={{ fontSize: 15, fontWeight: '400', marginTop: 10 }}>OTP is valid for 05:00 minutes.</Text>
//       </View>
//       {recaptchaVerifier && (
//         <FirebaseRecaptchaVerifierModal
//           ref={() => recaptchaVerifierRef.current}
//           firebaseConfig={firebaseConfig}
//         />
//       )}
//     </View>
//   );
// };

// export default PhoneVerifyScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   inputContainer: {
//     width: '90%',
//     marginTop: 50,
//     paddingBottom: 20
//   },
//   inputBox: {
//     marginTop: 15
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#f5f5f5',
//     height: 55,
//     paddingLeft: 10,
//     borderRadius: 20,
//     marginTop: 10
//   },
//   button: {
//     alignSelf: 'center',
//     backgroundColor: 'black',
//     paddingTop: 20,
//     paddingBottom: 20,
//     width: '90%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     marginTop: 40,
//   },
//   bottomAction: {
//     marginTop: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20
//   },
// });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PhoneVerifyScreen = () => {
  return (
    <View>
      <Text>PhoneVerifyScreen</Text>
    </View>
  )
}

export default PhoneVerifyScreen

const styles = StyleSheet.create({})