import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export const NavBar = (props) => {

  const navItemArr = [
    {
      title: '消息',
      icon: require('../../pic/icon_message.png'),
      chosen: false
    },
    {
      title: '联系人',
      icon: require('../../pic/icon_contact.png'),
      chosen: true
    },
    {
      title: '动态',
      icon: require('../../pic/icon_star.png'),
      chosen: false
    }
  ];

  return (
    <View style={styles.container}>
      {navItemArr && navItemArr.map((item, index) => {
        return (
          <TouchableOpacity key={`nav-item-${index}`} style={styles.navItem}>
            <View style={styles.navItem}>
              <Image style={styles.navIcon} source={item.icon}/>
              <Text style={[styles.navTitleText, item.chosen && styles.chosenText]}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navIcon: {
    width: 25,
    height: 25
  },
  navTitleText: {
    marginTop: 5,
    color: '#999',
    fontWeight: 'bold'
  },
  chosenText: {
    color: '#58a0f6'
  }
});