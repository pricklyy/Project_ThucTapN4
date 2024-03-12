import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Mission from '../../components/Mission';

const AllScreen = () => {
  return (
    <View style={styles.container}>
      
        <View>
          
            <Mission />
            
          
        </View>
      
    </View>
  )
}

export default AllScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})