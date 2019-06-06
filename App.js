import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import {QQPage} from "./src/pages/QQPage/index";
import {SimpleListPage} from "./src/pages/SimpleListPage/index";

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <QQPage/>
        {/* <SimpleListPage/> */}
      </View>
    );
  }
}