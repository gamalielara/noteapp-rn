import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import SearchIcon from "../../assets/svg/SearchIcon";
import InfoIcon from "../../assets/svg/InfoIcon";
import styles from "./styles";
import NoteBox from "../../components/NoteBox";
import React, { useContext, useEffect, useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { NoteInterface } from "../../utils/interfaces";
import { USER_ID } from "../../utils/constants";
import withRedirectAuth from "../../hoc/withRedirectAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NoteContext } from "../../modules/note/noteContext";

const HomeScreen: React.FC<NativeStackScreenProps<any>> = ({ navigation }) => {
  const [currentlyOpenedNotes, setCurrentlyOpenedNotes] =
    useState<Swipeable | null>(null);
  // const [notesToShow, setNotesToShow] = useState<NoteInterface[] | null>(null);
  const { notes: notesToShow } = useContext(NoteContext);

  const notes: Swipeable[] = [];

  const insets = useSafeAreaInsets();

  const closeCurrentNote = () => {
    if (!currentlyOpenedNotes) return;
    currentlyOpenedNotes.close();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={closeCurrentNote}>
        <View style={styles.mainContainer}>
          <View style={styles.homeHeader}>
            <Text style={styles.homeText}>NoteApp</Text>
            <View style={styles.topButtonsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
      <TouchableOpacity
        style={[
          styles.addNoteButton,
          { marginBottom: insets.bottom - 10, marginRight: insets.right + 10 },
        ]}
        onPress={() => {
          navigation.navigate("Create Note");
        }}
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default withRedirectAuth(HomeScreen);
