import * as Font from "expo-font";

export const loadFonts = () =>
  Font.loadAsync({
    "san-fransisco": require("../assets/font/snf-regular.otf"),
  });
