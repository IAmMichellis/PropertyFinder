'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Navigation } from "react-native-navigation";


function urlForQueryAndPage(key, value, pageNumber) {
  return 'https://reactnative.dev/movies.json';
}

type Props = {};
export default class SearchPage extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false,
      message: '',
    };
  }

  _onSearchTextChanged = (event) => {
    this.setState({ searchString: event.nativeEvent.text });
  };
  
  _handleResponse = (response) => {
    this.setState({ isLoading: false , message: '' });
    console.log('Properties/movies found: ' + response.movies);
    Navigation.push( this.props.componentId, {
      component: {
        name: 'com.PropertyFinder.SearchResultsPage',
        options: {
          topBar: {
            title: {
              text: 'Results'
            }
          }
        },
      }
    })
  };  

  _executeQuery = (query) => {
    this.setState({ isLoading: true });

    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
      }));

  };
  
  _onSearchPressed = () => {
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  };
  
  
  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null

    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name or postcode.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this._onSearchTextChanged}
            placeholder='Search via name or postcode'/>
          <Button
            onPress={this._onSearchPressed}
            color='#48BBEC'
            title='Go'
          />
        </View>
        <Image source={require('./Resources/house.png')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }
}

SearchPage.options = {
  topBar: {
    title: {
      text: 'Search',
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  },
});
