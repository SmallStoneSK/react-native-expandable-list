import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export const HeadBar = (props) => {

  const {headImg} = props;

  return (
    <View style={styles.container}>
      <Image style={styles.headImage} source={headImg}/>
      <Text style={styles.titleText}>联系人</Text>
      <Text style={styles.addText}>添加</Text>
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
    backgroundColor: '#58a0f6'
  },
  headImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  titleText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
  addText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
});