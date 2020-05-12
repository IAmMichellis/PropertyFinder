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

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.PropertyFinder.SearchPage',
            },
          },
        ],
      },
    },
  });
});
