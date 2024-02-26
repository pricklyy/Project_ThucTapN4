import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Mission from '../../components/Mission';

const AllScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View>
          <TouchableOpacity>
            <Mission />
            <Mission />
            <Mission />
            <Mission />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default AllScreen

const styles = StyleSheet.create({})