import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';


  const Drawer = createDrawerNavigator({
      
      Home: {
          screen: HomeStack,
      },
      Profile :{
          screen: ProfileStack,
          
      }
  });
  export default createAppContainer(Drawer);