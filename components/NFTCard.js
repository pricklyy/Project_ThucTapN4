import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NFTCard = ({ name, points, imageUri, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imageUri} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.points}>{`${points} điểm`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  points: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
});

export default NFTCard;
