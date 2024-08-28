import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const TestScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Test Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default TestScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red'
  }
})