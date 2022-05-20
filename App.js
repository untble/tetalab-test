import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import MainScreen from "./src/screens/MainScreen";

const navigator = createStackNavigator({
    Main: MainScreen
}, {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        title: 'News'
    }
});

export default createAppContainer(navigator);