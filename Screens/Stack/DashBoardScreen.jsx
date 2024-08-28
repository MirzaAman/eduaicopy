import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const DashBoardScreen = () => {
  return (
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <View style={styles.content}>
        <Text style={{fontSize:125,fontWeight:'700',color:'red',textAlign:'center'}} >Error</Text>
        <Text style={{fontSize:125,fontWeight:'700',color:'red',textAlign:'center'}} >Error</Text>
        <Text style={{fontSize:125,fontWeight:'700',color:'red',textAlign:'center'}} >Error</Text>
        <Text style={{fontSize:125,fontWeight:'700',color:'red',textAlign:'center'}} >Error</Text>
      </View>
    </SafeAreaView>
  )
}

export default DashBoardScreen

const styles = StyleSheet.create({})