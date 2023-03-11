import { FlatList, Text, TouchableOpacity, View } from "react-native";
import SearchIcon from "../../assets/svg/SearchIcon";
import InfoIcon from "../../assets/svg/InfoIcon";
import styles from "./styles";
import NoteBox from "../../components/NoteBox";
import NOTES_DUMMY_DATA from "../../mocks/notes";

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeHeader}>
        <Text style={styles.homeText}>The NoteApp</Text>
        <View style={styles.topButtonsContainer}>
          <TouchableOpacity>
            <View style={styles.button}>
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
      <View style={styles.notesContainer}>
        <FlatList
          data={NOTES_DUMMY_DATA}
          renderItem={({ item }) => (
            <NoteBox title={item.title} dateModified={item.created_at} />
          )}
          keyExtractor={(note) => note.id.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
