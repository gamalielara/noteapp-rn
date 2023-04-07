import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  backButton: {
    width: 45,
    aspectRatio: 1,
    backgroundColor: Colors.SECONDARY,
    position: "absolute",
    top: 50,
    left: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
