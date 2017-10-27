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
    console.log(JSON.stringify(mockData, null, 4));
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <HeadBar headImg={require('../../pic/head.jpg')}/>
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