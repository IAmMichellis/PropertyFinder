'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

type Props = {};
export default class SearchResultsPage extends Component<Props> {
  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item}) => {
    return (
      <TouchableHighlight
        underlayColor='#dddddd'>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
    
  };

  render() {
    return (
      <FlatList
        data={this.props.movies}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
