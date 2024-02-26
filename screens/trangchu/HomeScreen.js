import * as React from "react";
import { StyleSheet, View, SafeAreaView } from 'react-native';
// <<<<<<< RewardsScreen
// // import HeaderHome from "../../components/Homecomponent/Header/index";
// =======
// //import HeaderHome from "../../components/Homecomponent/Header/index";
// >>>>>>> dev
// // import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.viewHeader}>
           {/* <HeaderHome /> */}

        

      </View>
    {/* <ScrollView>
    <View style={styles.viewTrending}>
      <Trending navigation={navigation} />
    </View>

    <View style={styles.viewComing}>
        <ComingMovies navigation={navigation} />
    </View>
    </ScrollView> */}
  
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313230',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
    
      viewHeader: {
      },
    //   viewTrending: {
    //     flex: 1.4,
    //     marginTop: -8
    //   },
    
    //   viewComing: {
    //     flex: 1,
    //     marginTop: -20
    //   },
});
