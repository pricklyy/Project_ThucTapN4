import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import NFTCard from '../../components/NFTCard';
import RewardHeader from '../../components/ReawardHeader';

const RewardsScreen = () => {
  const points = 750;
  // Example data for NFTs
  const nfts = [
    { id: 'nft1', name: 'Proscenium #43', points: 750, imageUri: require('../../assets/nft1.png') },
    { id: 'nft2', name: 'Dobermann at Dusk', points: 369, imageUri: require('../../assets/nft2.png') },
    // ... more NFTs
  ];

  return (
    <View style={styles.container}>
      <RewardHeader points={points} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {nfts.map(nft => (
          <NFTCard
            key={nft.id}
            name={nft.name}
            points={nft.points}
            imageUri={nft.imageUri}
            onPress={() => console.log('NFT pressed', nft.id)} // Placeholder for actual navigation or action
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    paddingVertical: 20,
  },
});

export default RewardsScreen;
