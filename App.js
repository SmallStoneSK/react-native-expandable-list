import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
  PixelRatio,
  TouchableOpacity
} from 'react-native';

import {QQPage} from "./src/pages/QQPage/index";
import {ExpandableList} from "./src/components/ExpandableList";

const IS_ANDROID = Platform.OS === 'ios';
const PX_RATIO = IS_ANDROID && PixelRatio.get() > 2 ? 2 : PixelRatio.get();

export default class App extends Component {

  constructor(props) {

    super(props);

    this._renderListItem = this._renderListItem.bind(this);
    this._renderGroupHeader = this._renderGroupHeader.bind(this);
  }

  componentWillMount() {
    this.data = [
      {
        sectionHeaderData: {
          cityName: '东京',
          month: 8,
          percent: 50,
          oldPrice: 299,
          curPrice: 299
        },
        listData: [
          {
            title: '第一行'
          }
        ]
      },
      {
        sectionHeaderData: {
          cityName: '深圳',
          month: 8,
          percent: 50,
          oldPrice: 398,
          curPrice: 387
        },
        listData: [
          {
            title: '第一行'
          },
          {
            title: '第二行'
          }
        ]
      },
      {
        sectionHeaderData: {
          cityName: '纽约',
          month: 8,
          percent: 25,
          oldPrice: 412,
          curPrice: 400
        },
        listData: [
          {
            title: '第一行'
          },
          {
            title: '第二行'
          },
          {
            title: '第三行'
          }
        ]
      },
      {
        sectionHeaderData: {
          cityName: '青岛',
          month: 8,
          percent: 25,
          oldPrice: 400,
          curPrice: 387
        },
        listData: [
          {
            title: '第一行'
          },
          {
            title: '第二行'
          },
          {
            title: '第三行'
          },
          {
            title: '第一行'
          },
          {
            title: '第二行'
          },
          {
            title: '第三行'
          },
          {
            title: '第一行'
          },
          {
            title: '第二行'
          },
          {
            title: '第三行'
          },
          {
            title: '第一行'
          },
          {
            title: '第二行'
          },
          {
            title: '第三行'
          },
          {
            title: '第一行'
          },
          {
            title: '第二行'
          },
          {
            title: '第三行'
          }
        ]
      }
    ];
    this.openStatus = new Array(this.data.length).fill(false);
  }

  _handlePressLeft(sectionId, toggleOpenStatus) {
    this.openStatus = this.openStatus.map((item, index) => {
      return index === sectionId ? !item : false;
    });
    toggleOpenStatus(true);
  }

  _handlePressRight(item) {

  }

  _renderListItem({item, rowId, sectionId}) {
    return (
      <View style={styles.listItemContainer}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  _renderGroupHeader({item, sectionId, toggleOpenStatus}) {
    return (
      <View style={styles.sectionHeaderContainer}>
        <TouchableOpacity style={styles.sectionLeftPart} onPress={this._handlePressLeft.bind(this, sectionId, toggleOpenStatus)}>
          <View>
            <Text style={styles.cityText}>{item.cityName}</Text>
            <View style={styles.rowView}>
              <Text style={styles.monthText}>最低价在{item.month}月</Text>
              <Image style={[styles.arrow, this.openStatus[sectionId] && styles.reverseArrow]} source={require('./src/pic/arrow.png')}/>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.splitLine}/>
        <TouchableOpacity style={styles.sectionRightPart} onPress={this._handlePressRight.bind(this, item)}>
          <View>
            <View style={styles.rowView}>
              <Text style={styles.percent}>&darr;{item.percent}%</Text>
              <Text style={styles.curPrice}>&yen;{item.curPrice}</Text>
            </View>
            <Text style={styles.oldPrice}>&yen;{item.oldPrice}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {

    return (
      <View>
        <QQPage/>
      </View>
    );

    // return (
    //   <View style={styles.appContainer}>
    //     <ExpandableList
    //       data={this.data}
    //       itemStyle={styles.itemStyle}
    //       implementedBy={'ListView'}
    //       renderListItem={this._renderListItem}
    //       renderGroupHeader={this._renderGroupHeader}
    //       />
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 40,
    marginHorizontal: 20
  },
  itemStyle: {
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  sectionLeftPart: {
    flex: 1,
    justifyContent: 'center'
  },
  cityText: {
    color: '#333',
    fontSize: 16
  },
  monthText: {
    color: '#999',
    fontSize: 13,
    marginTop: 3
  },
  arrow: {
    width: 10,
    height: 10
  },
  reverseArrow: {
    transform: [{
      rotateX: '180deg'
    }]
  },
  splitLine: {
    borderRightWidth: 1 / PX_RATIO,
    borderRightColor: '#CCC',
    height: 25,
  },
  sectionRightPart: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  percent: {
    marginRight: 15,
    color: '#EF7D6D',
    fontWeight: 'bold'
  },
  curPrice: {
    color: '#333',
    fontWeight: 'bold'
  },
  oldPrice: {
    color: '#999',
    fontWeight: 'bold',
    textAlign: 'right',
    textDecorationLine: 'line-through'
  },
  listItemContainer: {
    height: 30,
    paddingLeft: 5,
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    borderTopWidth: 1,
    borderTopColor: '#EEE'
  }
});
