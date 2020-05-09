/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import SearchPage from './SearchPage';

Navigation.registerComponent('com.PropertyFinder.SearchPage', () => SearchPage);
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
