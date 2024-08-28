import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { MotiView, MotiText, AnimatePresence } from 'moti';

import menuIcon from '../../assets/menu.png';
import dp_example from '../../assets/dp_example.jpeg';
import ad_sample from '../../assets/ad_sample.png';
import { signOut } from 'firebase/auth';
import { auth } from '../Auth/Firebase/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const data = [
    { key: '1', title: 'Subject 1' },
    { key: '2', title: 'Subject 2' },
    { key: '3', title: 'Subject 3' },
    { key: '4', title: 'Subject 4' },
    { key: '5', title: 'Subject 5' },
    { key: '6', title: 'Subject 6' },
    { key: '7', title: 'Subject 7' },
    { key: '8', title: 'Subject 8' },
    { key: '9', title: 'Subject 9' },
    { key: '10', title: 'Subject 10' },
  ];

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem('userAuth')
      navigation.replace('usercontrolscreen');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <MotiView 
        style={styles.container} 
        from={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 300, duration: 500 }}
      >
        <MotiView 
          style={styles.appBar} 
          from={{ opacity: 0, translateY: -50 }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ delay: 400, duration: 500 }}
        >
          <TouchableOpacity onPress={handleSignOut}>
            <MotiView 
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }} 
              transition={{ delay: 500, duration: 500 }}
            >
              {/* <Image source={menuIcon} style={styles.menuIcon} /> */}
              <MaterialIcons name="menu" size={30} color="black" />
            </MotiView>
          </TouchableOpacity>
          <MotiView 
            style={styles.dp} 
            from={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 600, duration: 500 }}
          >
            <Image source={dp_example} style={styles.dp_example} />
          </MotiView>
        </MotiView>
        <MotiView 
          style={styles.adContainer} 
          from={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 700, duration: 500 }}
        />
        <MotiView 
          style={styles.subjectContainer} 
          from={{ opacity: 0, translateY: 50 }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ delay: 800, duration: 500 }}
        >
          <ScrollView
            horizontal
            contentContainerStyle={styles.container2}
            showsHorizontalScrollIndicator={false}
          >
            <AnimatePresence>
              {data.map((item, index) => (
                <MotiView 
                  key={index} 
                  style={[styles.item, { backgroundColor: '#fff' }]} 
                  from={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  transition={{ delay: 900 + (index * 100), duration: 500 }}
                >
                  <MotiText style={{ fontSize: 13 }}>{item.title}</MotiText>
                </MotiView>
              ))}
            </AnimatePresence>
          </ScrollView>
        </MotiView>
        <ScrollView >
          <MotiView 
            style={styles.testSection} 
            from={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1000, duration: 500 }}
          >
            <MotiView 
              style={styles.titleSection} 
              from={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1100, duration: 500 }}
            >
              <MotiText style={styles.title}>Series Test</MotiText>
            </MotiView>
            <ScrollView
              horizontal
              contentContainerStyle={styles.container3}
              showsHorizontalScrollIndicator={false}
            >
              <AnimatePresence>
                {data.map((item, index) => (
                  <MotiView 
                    key={index} 
                    style={styles.testItem} 
                    from={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ delay: 1200 + (index * 100), duration: 500 }}
                  >
                    <MotiText>{`Chapter ${index + 1}`}</MotiText>
                  </MotiView>
                ))}
              </AnimatePresence>
            </ScrollView>
          </MotiView>
          <MotiView 
            style={styles.testSection} 
            from={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1300, duration: 500 }}
          >
            <MotiView 
              style={styles.titleSection} 
              from={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1400, duration: 500 }}
            >
              <MotiText style={styles.title}>Practice Paper</MotiText>
            </MotiView>
            <ScrollView
              horizontal
              contentContainerStyle={styles.container3}
              showsHorizontalScrollIndicator={false}
            >
              <AnimatePresence>
                {data.map((item, index) => (
                  <MotiView 
                    key={index} 
                    style={styles.testItem} 
                    from={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ delay: 1500 + (index * 100), duration: 500 }}
                  >
                    <MotiText>{`Chapter ${index + 1}`}</MotiText>
                  </MotiView>
                ))}
              </AnimatePresence>
            </ScrollView>
          </MotiView>
        </ScrollView>
      </MotiView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingBottom: 10
  },
  appBar: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  dp: {
    width: 45,
    height: 45,
    backgroundColor: 'grey',
    borderRadius: 30,
  },
  dp_example: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  adContainer: {
    width: '80%',
    height: 160,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  item: {
    width: 100,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectContainer: {
    height: 65,
    borderTopWidth: .6,
    borderBottomWidth: 0.5,
    marginTop: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  container2: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  testSection: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleSection: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  container3: {
    flexDirection: 'row',
    height: 250,
    marginTop: 10
  },
  testItem: {
    // backgroundColor: 'yellow',
    width: 300,
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderWidth:1
  },
});
