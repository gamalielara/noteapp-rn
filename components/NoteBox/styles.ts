import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  noteBox: {
    width: "100%",
    minHeight: 75,
    maxHeight: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noteDesc: {
    flex: 1,
    minWidth: 0,
    marginRight: 10,
  },
  noteTitleText: {
    fontSize: 16,
    marginBottom: 7.5,
    color: "white",
    fontFamily: "snf-bold",
  },
  noteModifiedText: {
    color: "white",
    fontSize: 12.5,
    fontFamily: "snf",
  },
  deleteNoteBtnContainer: {
    flex: 1,
    flexBasis: "25%",
    minWidth: 0,
  },
  deleteNoteBtn: {
    minHeight: 75,
    maxHeight: 100,
    padding: 20,
    backgroundColor: Colors.RED,
    borderRadius: 10,
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box",
    marginLeft: 20,
  },
  lastNote: {
    marginBottom: 100,
  },
});
