/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import SearchPage from './SearchPage';
import SearchResultsPage from './SearchResultsPage';

Navigation.registerComponent('com.PropertyFinder.SearchPage', () => SearchPage);
Navigation.registerComponent(
  'com.PropertyFinder.SearchResultsPage',
  () => SearchResultsPage,
);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.PropertyFinder.SearchPage',
              options: {
                topBar: {
                  title: {
                    text: 'Search',
                  }
                }
              }
            },
          },
        ],
      },
    },
  });
});
