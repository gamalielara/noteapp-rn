import { useState } from "react";
import AppLoading from "expo-app-loading";
import { loadFonts } from "./utils/helpers";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginRegisterScreen from "./screens/LoginRegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AuthContext, AuthContextProvider } from "./modules/auth/authContext";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  const Stack = createNativeStackNavigator();

  if (isFontLoaded) {
    return (
      <SafeAreaProvider>
        <AuthContextProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name={"Login"} component={LoginRegisterScreen} />
              <Stack.Screen name={"Home"} component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContextProvider>
      </SafeAreaProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={() => console.log("ERROR LOADING FONT")}
      />
    );
  }
}
