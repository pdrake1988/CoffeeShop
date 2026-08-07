import { Authenticator } from "@aws-amplify/ui-react-native";
import { Amplify } from "aws-amplify";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStaticNavigation } from "@react-navigation/native";
import RootBottomTabs from "./src/nav/navigators/RootBottomTabs";
import amplify_outputs from "./amplify_outputs.json";

Amplify.configure(amplify_outputs);

const Navigator = createStaticNavigation(RootBottomTabs);

export default function App() {
  return (
    <Authenticator.Provider>
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </Provider>
    </Authenticator.Provider>
  );
}
