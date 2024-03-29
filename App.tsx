import { useState } from "react";
import AppLoading from "expo-app-loading";
import { loadFonts } from "./utils/helpers";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginRegisterScreen from "./screens/LoginRegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AuthContextProvider } from "./modules/auth/authContext";
import ProfileScreen from "./screens/ProfileScreen";
import CreateNoteScreen from "./screens/CreateNoteScreen";
import { NoteContextProvider } from "./modules/note/noteContext";
import withModal from "./hoc/withModal";

function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  const Stack = createNativeStackNavigator();

  if (isFontLoaded) {
    return (
      <SafeAreaProvider>
        <AuthContextProvider>
          <NoteContextProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"Home"} component={HomeScreen} />
                <Stack.Screen name={"Login"} component={LoginRegisterScreen} />
                <Stack.Screen name={"Profile"} component={ProfileScreen} />
                <Stack.Screen
                  name={"Create Note"}
                  component={CreateNoteScreen}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </NoteContextProvider>
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
export default withModal(App);
