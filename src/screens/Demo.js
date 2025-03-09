import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Demo() {

  return (
    <LinearGradient
      colors={['#0e579c', '#146bba']}
      style={styles.linearGradient} // Apply safe area top inset
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.text}>This is the Demo Screen!</Text>
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
    backgroundColor: 'white', 
    margin: 10,
    borderRadius: 10,
    elevation: 5, 
  },
  text: {
    color: 'black', 
    fontSize: 20,
  },
});
