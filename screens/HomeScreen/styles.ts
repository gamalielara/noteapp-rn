import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#252525",
    fontFamily: "san-fransisco",
  },
  homeText: {
    color: "white",
    fontSize: 30,
    position: "absolute",
  },
  topButtonsContainer: {
    display: "flex",
    gap: 10,
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
  homeHeader: {
    marginHorizontal: 20,
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    height: 100,
    alignItems: "center",
  },
  notesContainer: {
    padding: 10,
  },
});

export default styles;
