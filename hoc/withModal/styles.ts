import { StyleSheet } from "react-native";
import { transformToMatrix } from "react-native-svg/lib/typescript/lib/extract/extractTransform";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  modalBox: {
    width: "75%",
    height: 200,
    position: "absolute",
    top: "40%",
    left: "13%",
    zIndex: 999999,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: 20,
  },
});
