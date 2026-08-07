import { RootBottomTabs } from "./navigators/RootBottomTabs";

type RootStackType = typeof RootBottomTabs;

declare module "@react-navigation/native" {
  interface RootNavigator extends RootStackType {}
}
