import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoogleIcon from "../../assets/svg/GoogleIcon";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

WebBrowser.maybeCompleteAuthSession();

const LoginRegisterScreen: React.FC<NativeStackScreenProps<any, any>> = ({
  navigation,
}) => {
  const [accToken, setAccToken] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      "42464437388-8ta6leid7aslnv9c1m665ggjejgbq3cp.apps.googleusercontent.com",
    iosClientId:
      "42464437388-kja3sh7vil5l2r19f8qg4pqod3l1lg65.apps.googleusercontent.com",
    androidClientId:
      "42464437388-kaerrmaods352raro0h40n0fhoffmobt.apps.googleusercontent.com",
    expoClientId:
      "42464437388-8ta6leid7aslnv9c1m665ggjejgbq3cp.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccToken(response.authentication?.accessToken);
      accToken && fetchUserInfo();
    }
  }, [response, accToken]);

  const fetchUserInfo = async () => {
    const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accToken}`,
      },
    });

    const userInfo = await res.json();
    setUser(userInfo);
  };

  const insets = useSafeAreaInsets();

  const showUserInfo = () => console.table(user);

  return (
    <View
      style={[
        styles.backgroundContainer,
        { paddingVertical: insets.top, paddingHorizontal: insets.right + 30 },
      ]}
    >
      <View style={styles.mainContainer}>
        <Text style={styles.loginText}>Login To NoteApp</Text>
        <TouchableOpacity
          disabled={!request}
          style={styles.loginButton}
          onPress={() => {
            promptAsync().then(() => navigation.navigate("Home"));
          }}
        >
          <GoogleIcon />
          <Text style={styles.loginButtonText}>Sign In With Google</Text>
        </TouchableOpacity>
        {user && console.table(user)}
      </View>
    </View>
  );
};

export default LoginRegisterScreen;
