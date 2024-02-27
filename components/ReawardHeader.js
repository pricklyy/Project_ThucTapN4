import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RewardHeader = ({ points}) => {
  const nextRewardAt = 1000;
  const statusBarWidth = (points / nextRewardAt) * 100;

  return (
    <View style={styles.container}>
      <Image style={styles.trophyIcon} source={require('../assets/trophy.png')} />
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>{`${points} `}
        <Image
          source={require('../assets/diem.png')} // Replace with your points icon image path
          style={styles.pointsIcon}
        /> </Text>
        
        <View style={styles.statusBarBackground}>
          <View style={[styles.statusBarFiller, { width: `${statusBarWidth}%` }]} />
        </View>
        <Text style={styles.unlockText}>{`${nextRewardAt - points} điểm nữa để mở quà`}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.historyButton}>
          <Image style={styles.giftIcon} source={require('../assets/history.png')} /> 
          <Text>Lịch sử</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.giftButton}>
          <Image style={styles.giftIcon} source={require('../assets/gift.png')} />
          <Text>Đổi quà</Text>
        </TouchableOpacity>
      </View>
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
  pointsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  trophyIcon: {
    width: 30,
    height: 30,
  },
  pointsText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFD700', 
  },
  statusBarBackground: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginTop: 5,
    overflow: 'hidden',
  },
  statusBarFiller: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },
  unlockText: {
    fontSize: 16,
    color: '#FFA500',
    marginTop: 5,
  },
  iconsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width:80,
    height:100
  },
  historyButton: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  giftButton: {
    paddingTop:10,
    width: 50,
    height: 50,
  },
  giftIcon: {
    paddingTop:10,
    marginStart:10,
    width: 30,
    height: 30,
  },
});

export default RewardHeader;
