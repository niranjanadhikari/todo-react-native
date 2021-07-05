import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    paddingHorizontal:16,
    backgroundColor: 'coral',
  },
});

export default Header;
