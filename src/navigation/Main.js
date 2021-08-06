import { createStackNavigator } from 'react-navigation-stack';
import Courses from '../screens/Courses';
import Home from '../screens/Home';

const navigationOptions = {
  headerShown: false,
}

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    // navigationOptions,
  },
  Courses: {
    screen: Courses,
    // navigationOptions,
  },
});

export default MainNavigator;