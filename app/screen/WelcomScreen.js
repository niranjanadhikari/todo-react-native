import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpeg')}
    >
      <Text>Try editing me! 🎉</Text>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '90%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '90%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});

export default WelcomScreen;
