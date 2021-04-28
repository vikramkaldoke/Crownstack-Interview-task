import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import Color from '../constant/Colors';

const defalutNavigation = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Color.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary,
};

const ProductNavigator = createStackNavigator(
  {
    homeScreen: HomeScreen,
    detailsScreen: DetailsScreen,
  },
  {
    defaultNavigationOptions: defalutNavigation,
  },
);

export default createAppContainer(ProductNavigator);
