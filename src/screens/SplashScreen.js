import {useEffect} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'; // SafeAreaView and useSafeAreaInsets

export default function SplashScreen({ navigation }) {
//   const insets = useSafeAreaInsets();   
 useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,  
        routes: [{ name: 'login' }],  
      });
    }, 2000);
  }, [navigation]);
  return (
    <LinearGradient
      colors={['#0e579c', '#146bba']}
      style={[styles.linearGradient ]} // Apply safe area top inset
    >
      <SafeAreaView style={styles.splashContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.Splashimage}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Splashimage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
