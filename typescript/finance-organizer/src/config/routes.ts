import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

/* screens */
import Home from '../screens/Home';

const MainStack = createStackNavigator({
  Home
});

export default createAppContainer(MainStack);
