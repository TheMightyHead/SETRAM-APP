import {createStackNavigator} from 'react-navigation-stack';
import Profile from '../screens/Profile';
const screens = {
    Profile:{
        screen: Profile,
        navigationOptions:{
            title:'Profile',
        }
    },
}
const ProfileStack = createStackNavigator(screens);
export default ProfileStack;