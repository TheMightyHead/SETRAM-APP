import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Starting from '../screens/Starting'



const screens={
    Starting:{
        screen:Starting,
    },
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'Setram',
        }
        },
    Profile :{
        screen: Profile,
        navigationOptions:{
            title: 'Setram',
        }
    }
}
const HomeStack= createStackNavigator(screens);
export default createAppContainer(HomeStack);