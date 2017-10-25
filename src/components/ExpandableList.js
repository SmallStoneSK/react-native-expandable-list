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

    this.closeAll = this.closeAll.bind(this);
    this.toggleOpenStatus = this.toggleOpenStatus.bind(this);
    this._supportFlatList = this._supportFlatList.bind(this);
    this._renderListItem = this._renderListItem.bind(this);
    this._renderFlatListItem = this._renderFlatListItem.bind(this);
    this._renderListViewItem = this._renderListViewItem.bind(this);
    this._renderUsingView = this._renderUsingView.bind(this);
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

  closeAll() {
    this.setState({
      openStatus: this.state.openStatus.map(() => false)
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

    const {renderSectionHeader, renderListItem, itemStyle, itemVerticalSpace, itemOpenStyle} = this.props;

    const {
      listData = [],
      sectionHeaderData = []
    } = item;

    return (
      <View
        key={`section-${sectionId}`}
        style={[itemStyle, sectionId && itemVerticalSpace && {marginTop: itemVerticalSpace}]}
        >
        {renderSectionHeader && renderSectionHeader({
          sectionId,
          item: sectionHeaderData,
          toggleOpenStatus: this.toggleOpenStatus.bind(this, sectionId)}
        )}
        {listData.length > 0 &&
          <ScrollView bounces={false} style={!this.state.openStatus[sectionId] && {height: 0}}>
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

  _renderUsingView() {

    const {data = [], style} = this.props;

    return (
      <View style={style}>
        {data.map((item, sectionId) => {
          return this._renderListItem(item, sectionId);
        })}
      </View>
    )
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

    const strategy = {
      'View': this._renderUsingView,
      'ListView': this._renderUsingListView,
      'FlatList': this._supportFlatList() ? this._renderUsingFlatList : this._renderUsingListView
    };

    // give a default value to implementedBy
    let {implementedBy} = this.props;
    if(strategy[implementedBy]) {
      implementedBy = 'FlatList';
    }

    return strategy[implementedBy]();
  }
}