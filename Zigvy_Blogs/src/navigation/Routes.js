import {createSwitchNavigator} from '@react-navigation/compat';
import LoadingScreen from '../modules/login/LoadingScreen';
import LoginNavigator from './LoginStack'
import BlogNavigator from './BlogStack'


const Routes = createSwitchNavigator(
  {
    LoginRoute: { screen: LoginNavigator },
    LoadingScreen: { screen: LoadingScreen },
    BlogRoute: {screen: BlogNavigator}
  },
  {
    resetOnBlur: true
  }
);

export default Routes
