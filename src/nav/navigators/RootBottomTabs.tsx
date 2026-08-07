import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useIsSignedIn, useIsSignedOut } from "../auth";
import HomeNavigator from "./HomeNavigator";
import { Authenticator } from "@aws-amplify/ui-react-native";

export const RootBottomTabs = createBottomTabNavigator({
  groups: {
    signedIn: {
      if: useIsSignedIn,
      screens: {
        Home: HomeNavigator,
      },
    },
  },
  signedOut: {
    if: useIsSignedOut,
    screens: {
      Login: Authenticator,
    },
  },
});

export default RootBottomTabs;
