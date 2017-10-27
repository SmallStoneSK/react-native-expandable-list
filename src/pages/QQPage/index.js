import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {HeadBar} from "./HeadBar";
import {SearchBox} from "./SearchBox";
import {FriendList} from "./FriendList";
import {Constants} from "../../common/Constants";
import {mockData} from "../../utils/mockData";
import {NavBar} from "./NavBar";

export class QQPage extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.data = mockData;
    this.headImg = require('../../pic/head.jpg');
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <HeadBar headImg={this.headImg}/>
        <SearchBox/>
        <FriendList data={this.data}/>
        <NavBar/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: Constants.IS_IOS ? 20 : 0,
    height: Constants.DEVICE_HEIGHT - (Constants.IS_IOS ? 20 : 0)
  }
});