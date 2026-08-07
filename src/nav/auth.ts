import { useAuthenticator } from "@aws-amplify/ui-react-native";

export function useIsSignedIn() {
  const { authStatus } = useAuthenticator();

  return authStatus === "authenticated";
}

export function useIsSignedOut() {
  const { authStatus } = useAuthenticator();

  return authStatus === "unauthenticated";
}
