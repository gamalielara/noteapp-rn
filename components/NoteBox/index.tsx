import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import DeleteIcon from "../../assets/svg/DeleteIcon";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

interface NoteBoxInterface {
  index: number;
  title: string;
  dateModified: number;
  onDeleteNote: () => void;
  notes: any[];
  setCurrentlyOpenedNotes: React.Dispatch<
    React.SetStateAction<Swipeable | null>
  >;
  currentlyOpenedNotes: any;
}

const NoteBox: React.FC<NoteBoxInterface> = ({
  index,
  title,
  dateModified,
  onDeleteNote,
  notes,
  setCurrentlyOpenedNotes,
  currentlyOpenedNotes,
}) => {
  const isLastNote = index === notes.length - 1;

  const renderDeleteButton = () => {
    return (
      <View
        style={[styles.deleteNoteBtn, ...(isLastNote ? [styles.lastNote] : [])]}
        // onPress={onDeleteNote}
      >
        <DeleteIcon />
      </View>
    );
  };

  const closeOtherNotes = () => {
    if (currentlyOpenedNotes && currentlyOpenedNotes !== notes[index]) {
      currentlyOpenedNotes.close();
    }
    setCurrentlyOpenedNotes(notes[index]);
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={(progress, dragX) => renderDeleteButton()}
        ref={(el) => (notes[index] = el)}
        rightThreshold={-500}
        onSwipeableOpen={closeOtherNotes}
      >
        <TouchableHighlight
          style={[styles.noteBox, ...(isLastNote ? [styles.lastNote] : [])]}
        >
          <View style={styles.noteDesc}>
            <Text style={styles.noteTitleText} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.noteModifiedText}>
              Modified at {new Date(dateModified).toDateString()}
            </Text>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default NoteBox;
