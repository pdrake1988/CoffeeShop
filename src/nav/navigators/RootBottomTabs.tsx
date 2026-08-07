import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";

export const RootBottomTabs = createBottomTabNavigator({
  screens: {
    Home: HomeNavigator,
  },
});

export default RootBottomTabs;
