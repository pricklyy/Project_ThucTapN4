import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import NFTCard from '../../components/NFTCard';
import RewardHeader from '../../components/ReawardHeader'; 

const RewardsScreen = () => {
  const points = 750;
  // Example data for NFTs
  const nfts = [
    { id: 'nft1', name: 'Proscenium #43', points: 750, imageUri: require('../../assets/nft1.png') },
    { id: 'nft2', name: 'Dobermann at Dusk', points: 369, imageUri: require('../../assets/nft2.png') },
    { id: 'nft3', name: 'Vision of Harmony', points: 690, imageUri: require('../../assets/nft2.png') },
    { id: 'nft4', name: 'Proscenium #43', points: 750, imageUri: require('../../assets/nft1.png') },

    // ... more NFTs
  ];

  const renderNFTCard = ({ item }) => (
    <NFTCard
      name={item.name}
      points={item.points}
      imageUri={item.imageUri}
      onPress={() => console.log('NFT pressed', item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <RewardHeader points={points} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Quà tặng</Text>
        <TouchableOpacity onPress={() => console.log('View all pressed')}>
          <Text style={styles.viewAllText}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.headerSubtitle}>Tích điểm đổi quà NFTs</Text>

      <FlatList
        data={nfts}
        renderItem={renderNFTCard}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 16,
    color: '#0085FF',
    textDecorationLine: 'underline',
  },
  contentContainer: {
    paddingHorizontal: 10, 
  },
  row: {
    justifyContent: 'space-between', 
    marginBottom: 20,
  },
  headerSubtitle: {
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#555',
    marginBottom: 20, 
  },
});

export default RewardsScreen;
