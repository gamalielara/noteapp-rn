import {
  FlatList,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import SearchIcon from "../../assets/svg/SearchIcon";
import InfoIcon from "../../assets/svg/InfoIcon";
import styles from "./styles";
import NoteBox from "../../components/NoteBox";
import NOTES_DUMMY_DATA from "../../mocks/notes";
import { useEffect, useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NoteInterface } from "../../utils/interfaces";
import { USER_ID } from "../../utils/constants";

const HomeScreen = () => {
  const [currentlyOpenedNotes, setCurrentlyOpenedNotes] =
    useState<Swipeable | null>(null);
  const [notesToShow, setNotesToShow] = useState<NoteInterface[] | null>(null);

  const notes: Swipeable[] = [];

  const closeCurrentNote = () => {
    if (!currentlyOpenedNotes) return;
    currentlyOpenedNotes.close();
  };

  const fetchNotes = async () => {
    const res = await fetch(
      `https://noteapp-31317-default-rtdb.asia-southeast1.firebasedatabase.app/users/${USER_ID}/notes.json`
    );
    const data = await res.json();

    const notes: NoteInterface[] = [];

    Object.keys(data).forEach((key) => notes.push(data[key]));

    setNotesToShow(notes as NoteInterface[]);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={closeCurrentNote}>
      <View style={styles.mainContainer}>
        <View style={styles.homeHeader}>
          <Text style={styles.homeText}>NoteApp</Text>
          <View style={styles.topButtonsContainer}>
            <TouchableOpacity>
              <View style={[styles.button, styles.infoButton]}>
                <InfoIcon />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <SearchIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={notesToShow}
          contentContainerStyle={{ marginBottom: 10000 }}
          renderItem={({ item, index }) => (
            <NoteBox
              index={index}
              title={item.title}
              notes={notes}
              setCurrentlyOpenedNotes={setCurrentlyOpenedNotes}
              currentlyOpenedNotes={currentlyOpenedNotes}
              dateModified={item.created_at}
              onDeleteNote={() => {}}
            />
          )}
          keyExtractor={(note) => note.id.toString()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
