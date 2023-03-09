import { StyleSheet } from "react-native";
import HomePage from "./screens/HomeScreen";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { loadFonts } from "./utils/helpers";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (isFontLoaded) {
    return <HomePage />;
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
