import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RewardHeader = ({ points }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.trophyIcon} source={require('../assets/trophy.png')} />
      <Text style={styles.pointsText}>{`${points} điểm`}</Text>
      <TouchableOpacity style={styles.historyButton}>
        <Image source={require('../assets/history.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  trophyIcon: {
    width: 30,
    height: 30,
  },
  pointsText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFD700', // Gold color for the points
  },
  historyButton: {
    // Styles for history button if needed
  },
});

export default RewardHeader;
