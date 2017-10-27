import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export const HeadBar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>可扩展列表demo</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D76852'
  },
  titleText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
});