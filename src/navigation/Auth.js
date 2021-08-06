import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';

const navigationOptions = {
  headerShown: false,
}

const AuthNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions,
  },
  Login: {
    screen: Login,
    navigationOptions,
  },
  SignUp: {
    screen: SignUp,
    navigationOptions,
  }
})

export default AuthNavigator;