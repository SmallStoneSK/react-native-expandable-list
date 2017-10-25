import React, {Component} from 'react';
import {
  View,
  ListView,
  ScrollView,
  FlatList,
  LayoutAnimation
} from 'react-native';

export class ExpandableList extends Component {

  constructor(props) {

    super(props);

    this.state = {
      openStatus: this._getInitialOpenStatus()
    };

    this.toggleOpenStatus = this.toggleOpenStatus.bind(this);
    this._supportFlatList = this._supportFlatList.bind(this);
    this._renderListItem = this._renderListItem.bind(this);
    this._renderFlatListItem = this._renderFlatListItem.bind(this);
    this._renderListViewItem = this._renderListViewItem.bind(this);
    this._renderUsingFlatList = this._renderUsingFlatList.bind(this);
    this._renderUsingListView = this._renderUsingListView.bind(this);
  }

  componentWillMount() {
    if(!this._supportFlatList()) {
      this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    }
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  _supportFlatList() {
    return !!FlatList;
  }

  _getInitialOpenStatus() {

    const {initialOpenIndexArr = [], data = []} = this.props;

    return new Array(data.length)
      .fill(false)
      .map((item, index) => {
        return initialOpenIndexArr.indexOf(index) !== -1;
      });
  }

  toggleOpenStatus(index, closeOthers) {

    const newOpenStatus = this.state.openStatus.map((status, idx) => {
      return idx !== index
        ? (closeOthers ? false : status)
        : !status;
    });

    this.setState({
      openStatus: newOpenStatus
    });
  }

  _renderListItem(item, sectionId) {

    const {renderSectionHeader, renderListItem, itemStyle} = this.props;

    const {
      listData = [],
      sectionHeaderData = []
    } = item;

    return (
      <View key={`section-${sectionId}`} style={itemStyle}>
        {renderSectionHeader && renderSectionHeader({
          sectionId,
          item: sectionHeaderData,
          toggleOpenStatus: this.toggleOpenStatus.bind(this, sectionId)}
        )}
        {listData.length > 0 &&
          <ScrollView style={!this.state.openStatus[sectionId] && {height: 0}}>
            {listData.map((listItem, index) => {
              return (
                <View key={`sid:${sectionId}-rid:${index}`}>
                  {renderListItem && renderListItem({item: listItem, rowId: index, sectionId})}
                </View>
              );
            })}
          </ScrollView>
        }
      </View>
    );
  }

  _renderFlatListItem({item, index}) {
    return this._renderListItem(item, index);
  }

  _renderListViewItem(rowData, sectionId, rowId) {
    return this._renderListItem(rowData, parseInt(rowId));
  }

  _renderUsingFlatList() {

    const {data = [], style} = this.props;

    return (
      <FlatList
        data={data}
        style={style}
        extraData={this.state}
        keyExtractor={(item, index) => index}
        renderItem={this._renderFlatListItem}
        />
    );
  }

  _renderUsingListView() {

    const {data = [], style} = this.props;

    return (
      <ListView
        style={style}
        renderRow={this._renderListViewItem}
        dataSource={this.ds.cloneWithRows(data)}
        />
    );
  }

  render() {
    return this._supportFlatList()
      ? this._renderUsingFlatList()
      : this._renderUsingListView();
  }
}