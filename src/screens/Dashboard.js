import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Import from the package
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoLeft}
        />
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoRight}
        />
      </View>
      <View style={styles.bottomHeader}>
        <View style={[styles.bottomHeaderLeft, { gap: 10 }]}>
          <View style={styles.bottomHeaderLeft}>
            <AntDesign style={{ color: "red" }} name="heart" size={19} />
            <Text style={[styles.text]}>Wishlist</Text>
          </View>
          <View style={styles.bottomHeaderLeft}>
            <FontAwesome style={{ color: "white" }} name="user" size={19} />
            <Text style={[styles.text]}>Rinku Testing</Text>
          </View>
        </View>
        <View style={styles.bottomHeaderLeft}>
          <SimpleLineIcons style={{ color: "white" }} name="logout" size={17} />
          <Text style={[styles.text]}>LogOut</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white", // Optional: Set background color for visibility
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  logoLeft: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  logoRight: {
    width: 120,
    height: 70,
    resizeMode: "contain",
  },
  bottomHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#376a85",
    alignItems: "center",
    padding: 15,
  },
  bottomHeaderLeft: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 5,
    color: "white",
    fontSize: 15,
    fontWeight: "medium",
  },
});
