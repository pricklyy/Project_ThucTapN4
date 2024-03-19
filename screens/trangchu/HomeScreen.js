import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import HeaderHome from "../../components/trangchu/headerHome";
import ComingHome from "../../components/trangchu/comingHome";
import Mission from "../../components/Mission";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewHeader}>
        <HeaderHome />
        <ComingHome />
        <ScrollView style={styles.scrollview}>
          <View>
            <TouchableOpacity>
              <Mission
              />
             
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  viewHeader: {
    flex: 1,
  },
});
