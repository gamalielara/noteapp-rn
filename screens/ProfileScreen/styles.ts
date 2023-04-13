import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROND,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    borderRadius: 100,
    width: 100,
    aspectRatio: 1,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  profileName: {
    fontFamily: "snf-bold",
    color: Colors.SECONDARY,
    textAlign: "center",
    fontSize: 25,
  },
  profileEmail: {
    color: Colors.SECONDARY,
    fontFamily: "snf",
    fontSize: 12,
    textAlign: "center",
  },
});
