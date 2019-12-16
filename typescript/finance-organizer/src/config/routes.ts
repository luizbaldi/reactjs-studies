import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

/* screens */
import Home from '../screens/Home';
import MonthDetail from '../screens/MonthDetail';

const MainStack = createStackNavigator({
  Home,
  MonthDetail
});

export default createAppContainer(MainStack);
