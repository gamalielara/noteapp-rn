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
  addNoteButton: {
    borderRadius: 100,
    backgroundColor: Colors.SECONDARY,
    width: 60,
    aspectRatio: 1,
    position: "absolute",
    bottom: 25,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  plusText: {
    fontFamily: "snf",
    fontSize: 35,
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
});

export default styles;
