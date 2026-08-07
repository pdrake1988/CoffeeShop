import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const HomeNavigator = createNativeStackNavigator({
  screens: {
    Home: Home,
  },
});

export default HomeNavigator;
