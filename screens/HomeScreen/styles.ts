import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROND,
    paddingHorizontal: 10,
  },
  homeText: {
    color: "white",
    fontSize: 30,
    position: "absolute",
    fontFamily: "snf-bold",
  },
  topButtonsContainer: {
    display: "flex",
    marginLeft: "auto",
    marginRight: 10,
    flexDirection: "row",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#3B3B3B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  infoButton: {
    marginRight: 10,
  },
  homeHeader: {
    marginHorizontal: 5,
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    height: 100,
    alignItems: "center",
  },
});

export default styles;
