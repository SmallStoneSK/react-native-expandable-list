import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {HeadBar} from "./HeadBar";
import {List} from "./List";
import {Constants} from "../../common/Constants";

export class SimpleListPage extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.data = [
      {
        groupHeaderData: {title: 'Dashboard'},
        groupListData: ['Calls', 'Chart', 'Map']
      },
      {
        groupHeaderData: {title: 'Profile'},
        groupListData: ['User', 'Add contact', 'Calendar']
      },
      {
        groupHeaderData: {title: 'Messages'},
        groupListData: ['Inbox', 'Sent', 'Deleted']
      },
      {
        groupHeaderData: {title: 'Settings'},
        groupListData: ['Fill Beer', 'Adjust', 'Alarm']
      }
    ]
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <HeadBar/>
        <List data={this.data}/>
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