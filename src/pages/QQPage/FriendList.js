import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {ExpandableList} from "../../components/ExpandableList";
import {Constants} from "../../common/Constants";

export class FriendList extends PureComponent {
  
  constructor(props) {
    
    super(props);
    
    this._renderGroupListItem = this._renderGroupListItem.bind(this);
    this._renderGroupHeader = this._renderGroupHeader.bind(this);
  }

  _renderGroupListItem({item, groupId, rowId}) {

    const {headImg, nickName, onlineType, signature} = item;

    return (
      <View style={styles.listItemContainer}>
        <Image style={styles.headImage} source={headImg}/>
        <View style={styles.info}>
          <Text style={styles.nickName}>{nickName}</Text>
          <View style={styles.rowView}>
            <Text style={styles.onlineType}>[{onlineType}]</Text>
            <Text style={styles.signature} numberOfLines={1}>{signature}</Text>
          </View>
        </View>
      </View>
    );
  }

  _renderGroupHeader({item, groupId, status, toggleStatus}) {

    const {title, online, total} = item;
    const arrowImage = status ? require('../../pic/icon_down_arrow.png') : require('../../pic/icon_right_arrow.png');

    return (
      <TouchableOpacity onPress={() => toggleStatus()}>
        <View style={styles.groupHeader}>
          <View style={styles.groupTitle}>
            <Image style={styles.groupTitleArrow} source={arrowImage}/>
            <Text style={styles.groupTitleText}>{title}</Text>
          </View>
          <Text style={styles.groupOnlinePercent}>{online}/{total}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    
    const {data = []} = this.props;

    return (
      <View style={{flex: 1}}>
        <ExpandableList
          data={data}
          implementedBy={'ListView'}
          renderGroupHeader={this._renderGroupHeader}
          renderGroupListItem={this._renderGroupListItem}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  groupHeader: {
    height: 50,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  groupTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  groupTitleArrow: {
    width: 16,
    height: 16,
    marginRight: 5
  },
  groupTitleText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold'
  },
  groupOnlinePercent: {
    color: '#999',
    fontSize: 13
  },
  listItemContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1 / Constants.PX_RATIO,
    borderBottomColor: '#DDD'
  },
  headImage: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
    borderRadius: 25,
  },
  info: {
    height: 50,
    marginVertical: 10,
    justifyContent: 'space-between'
  },
  nickName: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold'
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  onlineType: {
    color: '#999',
    fontSize: 14
  },
  signature: {
    width: 200,
    color: '#999',
    fontSize: 14,
    marginLeft: 5
  }
});