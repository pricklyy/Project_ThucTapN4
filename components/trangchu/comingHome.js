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

const comingHome = ({}) => {
  const navigation = useNavigation();
  return (
  
      <View style={styles.container}>
        <Text style={styles.text}>Nhiệm vụ của tôi</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.nhiemvu}>
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreen")}
            >
              <Text style={styles.textMission}>Nhiệm vụ 1</Text>
              <Text>
                {" "}
                <FontAwesome name="calendar" color={"red"} /> 24/12/2023
              </Text>
              <Text style={{ fontWeight: "bold" }}>
                Mức độ:<Text> dễ</Text>
              </Text>
              <Text>
                {" "}
                <Text>+36</Text>{" "}
                <AntDesign name="star" size={15} color="yellow" />{" "}
              </Text>
              <Image
                style={styles.imgnv}
                source={require("../../assets/1.webp")}
              />
            </TouchableOpacity>
          </View>
          {/* tack1 */}
          <View style={styles.nhiemvu}>
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreen")}
            >
              <Text style={styles.textMission}>Nhiệm vụ 1</Text>
              <Text>
                {" "}
                <FontAwesome name="calendar" color={"red"} /> 24/12/2023
              </Text>
              <Text style={{ fontWeight: "bold" }}>
                Mức độ:<Text> dễ</Text>
              </Text>
              <Text>
                {" "}
                <Text>+36</Text>{" "}
                <AntDesign name="star" size={15} color="yellow" />{" "}
              </Text>
              <Image
                style={styles.imgnv}
                source={require("../../assets/1.webp")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.nvlist}>
          <Text style={{ fontWeight:"bold",}}>Nhiệm vụ</Text>
          <Text style={{ fontWeight:"bold",}}>Tất cả</Text>
        </View>
      </View>
  
  );
};

export default comingHome;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  nhiemvu: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    width: 200,
    height: 160,
    padding: 20,
    marginLeft: 10,
    marginBottom: 10,
  },

  textMission: {
    fontSize: 20,
    fontWeight: "bold",
  },
  nvlist: {
    flexDirection: "row",
    fontSize: 20,
    paddingHorizontal: 10,
   
    justifyContent: "space-between",
  },
  imgnv: {
    width: 50,
    height: 50,
    marginLeft: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
