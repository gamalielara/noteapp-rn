import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  createNoteContainer: {
    backgroundColor: Colors.BACKGROND,
    flex: 1,
    width: "100%",
  },

  createNoteWrapper: {
    margin: 20,
  },

  button: {
    backgroundColor: Colors.SECONDARY,
    width: 45,
    aspectRatio: 1,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  noteTitle: {
    color: Colors.WHITE,
    fontFamily: "snf-bold",
    fontSize: 40,
    marginTop: 10,
  },

  noteBody: {
    color: Colors.SECONDARY,
    fontSize: 20,
    marginTop: 25,
    fontFamily: "snf",
  },

  topLeftButtonEditableMode: {
    display: "flex",
    flexDirection: "row",
    rowGap: 10,
    marginTop: 50,
    width: "35%",
    marginLeft: "auto",
    justifyContent: "flex-end",
    marginRight: 20,
  },
});
