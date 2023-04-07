import { useContext, useEffect } from "react";
import { AuthContext } from "../../modules/auth/authContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NoteContext } from "../../modules/note/noteContext";
import { addNote } from "../../modules/note/noteAction";
import useFetchUserNotes from "../../hooks/useFetchUserNotes";
import { v4 as uuidv4 } from "uuid";

export default (Component: React.FC<any>) => (props: any) => {
  const { user } = useContext(AuthContext);
  const { notes, dispatch: noteDispatch } = useContext(NoteContext);

  useFetchUserNotes();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  if (user) {
    return <Component {...props} />;
  } else {
    navigation.navigate("Login");
    return null;
  }
};
