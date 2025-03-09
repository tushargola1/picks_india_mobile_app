import { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, Alert, Touchable, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
export default function Login({navigation}) {
  const [schoolValue, setSchoolValue] = useState(null);
  const [registrationNo, setRegistrationNo] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();   
  const handleSubmit =() =>{
    navigation.navigate('dashboard')
  }
  return (
    <LinearGradient
      colors={["#0e579c", "#146bba"]}
      style={styles.linearGradient} 
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
            />
            <View style={styles.horizontalLine} />
          </View>

          <View style={styles.dropdownContainer}>
            <Text style={styles.loginHeading}>Login</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={false}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select School"
              value={schoolValue}
              onChange={(item) => {
                setSchoolValue(item.value);
              }}
              renderLeftIcon={() => (
                <Ionicons
                  style={styles.icon}
                  color="black"
                  name="school"
                  size={20}
                />
              )}
            />
            <TextInput
              name="login"
              placeholder="Registration No."
              style={[styles.dropdown, { marginTop: 20 }]}
              value={registrationNo} 
              onChangeText={(text) => setRegistrationNo(text)}
            />
          <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    paddingHorizontal: 10,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  logo: {
    width: 110,
    height: 80,
    resizeMode: "contain",
    alignSelf: "flex-end",
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
  dropdownContainer: {
    margin: 16,
  },
  loginHeading: {
    marginBottom: 15,
    fontSize: 20,
    color: "#0e579c",
    fontWeight: "bold",
  },
  dropdown: {
    height: 50,
    borderWidth: 2,
    borderColor: "#0e579c",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  loginButton:{
    backgroundColor:"#096faf",
    marginTop:20,
    padding:10,
    borderRadius:10,
    elevation: 20,
  },
    buttonText:{
    textAlign:"center",
    fontWeight:"bold",
    color:"#ffff",
    fontSize:16,
  }
});
