import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import NFTCard from '../../components/NFTCard';
import RewardHeader from '../../components/ReawardHeader';
import axios from 'axios'; 

const RewardsScreen = () => {
  const points = 75;
  const [nfts, setNfts] = useState([]);
  const xKey = "2neS76iK3K9IVD5y"; // Thay thế bằng x-api-key của bạn
  const wallID = "5wbGvpCsCznhoRCxWaJaJbtaXsiph55rQPGR7LBKaQe2"; // Thay thế bằng địa chỉ ví của bạn
  const network = "devnet"; // Sử dụng mạng devnet

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=${network}&address=${wallID}`;
        const response = await axios.get(nftUrl, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": xKey,
          },
        }); 
        const nftData = response.data.result.map((item) => ({
          id: item.mint,
          name: item.name,
          points: 100, // Giả sử mỗi NFT cần 100 điểm
          imageUri: { uri: item.image_uri },
        }));
        setNfts(nftData);
      } catch (error) {
        console.log(error);
        Alert.alert("Error", "Unable to fetch NFTs");
      }
    };

    fetchNFTs();
  }, []);

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
        keyExtractor={(item) => item.id.toString()}
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
