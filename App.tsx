import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import { Amplify } from "aws-amplify";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStaticNavigation } from "@react-navigation/native";
import RootBottomTabs from "./src/nav/navigators/RootBottomTabs";
import amplify_outputs from "./amplify_outputs.json";

Amplify.configure(amplify_outputs);

const Navigator = createStaticNavigation(RootBottomTabs);

function AppContent() {
  const { authStatus } = useAuthenticator();

  if (authStatus !== "authenticated") {
    return <Authenticator />;
  }

  return <Navigator />;
}

export default function App() {
  return (
    <Authenticator.Provider>
      <Provider store={store}>
        <SafeAreaProvider>
          <AppContent />
        </SafeAreaProvider>
      </Provider>
    </Authenticator.Provider>
  );
}
