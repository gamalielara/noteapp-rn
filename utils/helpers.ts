import * as Font from "expo-font";
import SanFransiscoRegular from "../assets/fonts/snf-regular.otf";
import SanFransiscoBold from "../assets/fonts/snf-bold.otf";
import SanFransiscoSemiBold from "../assets/fonts/snf-semibold.otf";

export const loadFonts = () =>
  Font.loadAsync({
    snf: SanFransiscoRegular,
    "snf-bold": SanFransiscoBold,
    "snf-semibold": SanFransiscoSemiBold,
  });
