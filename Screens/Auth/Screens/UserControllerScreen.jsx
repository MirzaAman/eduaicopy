import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import header from '../../../assets/header.png'

const UserControllerScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} >
      <View>
        <View style={{ alignSelf: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>JDT ISLAM POLYTECHNIC COLLEGE</Text>
          <Text>Vellimadukunnu, Calicut - 12</Text>
        </View>
        <View style={{ alignSelf: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Courses</Text>
          <Text>Computer Engineering</Text>
          <Text>Civil Engineering</Text>
          <Text>Mechanical Engineering</Text>
          <Text>Automobile Engineering</Text>
          <Text>Electirc & Electronic Engineering</Text>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default UserControllerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  headerImg: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 30,
    flex: 2
  },
  headerTitle1: {
    width: '70%',
    alignSelf: 'center'
  },
  headerTitle2: {
    width: '96%',
    alignSelf: 'center',
    marginTop: 5
  },
  headerFont: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600'
  },
  headerFont2: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600'
  },
  headerFont3: {
    color: 'grey',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5
  },
  textContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center'
  },
  actionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingLeft: 30,
    paddingRight: 30,
  },
  button1: {
    backgroundColor: 'black',
    padding: 10,
    height: 60,
    width: 170,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    backgroundColor: 'black',
    padding: 10,
    height: 60,
    width: 170,
    borderRadius: 30,
    alignItems:'center',
  },
  headerFont4: {
    color: 'grey',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 30
  },
})
