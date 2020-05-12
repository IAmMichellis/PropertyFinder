'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};
export default class SearchResultsPage extends Component<Props> {
  render() {
    return (
    <View style={[styles.root]}>
      <Text>Search Results</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
