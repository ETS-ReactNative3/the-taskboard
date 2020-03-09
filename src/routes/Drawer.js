import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeStack from './HomeStack';
import SummaryStack from './SummaryStack';
import LibraryStack from './LibraryStack';
import SettingStack from './SettingStack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Summary: {
    screen: SummaryStack,
  },
  Library: {
    screen: LibraryStack,
  },
  Settings: {
    screen: SettingStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
