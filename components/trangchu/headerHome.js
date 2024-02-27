import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const headerHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.text_two}>Hi,Nguyễn</Text>
      </View>
      <View style={styles.viewIcon}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
        >
          <FontAwesome name="search" size={25} color={"#000000"}></FontAwesome>
        </TouchableOpacity>
      </View>
     
   

    </View>
  );
};

export default headerHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    margin:10,
 },

  viewText: {
    margin: 10,
  
  },
  text_two: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
  },

  viewIcon: {
    margin: 10,
  },
});
