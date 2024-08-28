import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import success from '../../../assets/success.png'

const SuccessFullScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image source={success} style={{ height: 290, width: 280 }} />
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 30, fontWeight: '600' }} >Your account </Text>
        <Text style={{ fontSize: 25, fontWeight: '600', marginTop: 10 }}>has been successfully created!</Text>
      </View>
      <View style={styles.footer}>
          <TouchableOpacity style={{backgroundColor:'black',paddingBottom:30,paddingTop:30,paddingLeft:50,paddingRight:50,borderRadius:40}} >
            <Text style={{fontSize:15,color:'white'}} >Explore Edu Ai</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SuccessFullScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor:'white'
  },
  top: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
})