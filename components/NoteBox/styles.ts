import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  noteBox: {
    width: "100%",
    minHeight: 75,
    maxHeight: 100,
    padding: 10,
    backgroundColor: "gray",
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
    fontWeight: "bold",
    marginBottom: 7.5,
    color: "white",
    whiteSpace: "wrap",
  },
  noteModifiedText: {
    color: "white",
    fontSize: 12.5,
  },
  deleteNoteBtnContainer: {
    flex: 1,
    flexBasis: "25%",
    minWidth: 0,
  },
  deleteNoteBtn: {
    padding: 10,
    backgroundColor: "#3B3B3B",
    borderRadius: 15,
    width: 45,
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
});
