import {
  createAppContainer,
  createStackNavigator,
  HeaderBackButton,
} from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#136' },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
