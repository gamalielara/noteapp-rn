import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: Colors.BACKGROND,
    flex: 1,
  },
  mainContainer: {
    marginTop: "auto",
    marginBottom: "auto",
    padding: 5,
  },
  loginText: {
    fontSize: 30,
    marginLeft: "auto",
    marginRight: "auto",
    color: Colors.SECONDARY,
    fontFamily: "snf-bold",
  },
  loginButton: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  loginButtonText: {
    textAlign: "center",
    fontFamily: "snf",
    fontSize: 16,
  },
});
