import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import DeleteIcon from "../../assets/svg/DeleteIcon";

interface NoteBoxInterface {
  title: string;
  dateModified: number;
}

const NoteBox: React.FC<NoteBoxInterface> = ({ title, dateModified }) => {
  return (
    <TouchableOpacity style={styles.noteBox}>
      <View style={styles.noteDesc}>
        <Text style={styles.noteTitleText} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.noteModifiedText}>
          Modified at {new Date(dateModified).toDateString()}
        </Text>
      </View>
      <TouchableWithoutFeedback style={styles.deleteNoteBtnContainer}>
        <View style={styles.deleteNoteBtn}>
          <DeleteIcon />
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

export default NoteBox;
