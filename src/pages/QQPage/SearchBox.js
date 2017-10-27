import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export const SearchBox = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchClick}>
        <View style={styles.rowView}>
          <Image style={styles.searchIcon} source={require('../../pic/icon_search.png')}/>
          <Text style={styles.searchText}>搜索</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1
  },
  searchClick: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 4
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginRight: 5
  },
  searchText: {
    color: '#999',
    fontSize: 15,
    fontWeight: 'bold'
  }
});