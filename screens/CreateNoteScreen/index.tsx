import withRedirectAuth from "../../hoc/withRedirectAuth";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import PencilIcon from "../../assets/svg/PencilIcon";
import {
  NOTE_BODY_CREATE_NEW,
  NOTE_TITILE_CREATE_NEW,
} from "../../utils/constants";
import React, { useContext, useEffect, useState } from "react";
import { NoteInterface } from "../../utils/interfaces";
import EyeIcon from "../../assets/svg/EyeIcon";
import SaveIcon from "../../assets/svg/SaveIcon";
import { Colors } from "../../utils/colors";
import withModal, { ModalContext } from "../../hoc/withModal";

const CreateNoteScreen: React.FC = () => {
  const insects = useSafeAreaInsets();
  const [isCreateMode, setIsCreateMode] = useState<boolean>(true);
  const [note, setNote] = useState<NoteInterface | null>(null);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const { setShowModal } = useContext(ModalContext);

  console.log(setShowModal);

  useEffect(() => {
    if (isCreateMode) {
      setNote(null);
    }
  }, []);

  const onSaveNote = () => {
    if (isCreateMode) {
    } else {
    }
  };

  const TopLeftButton = React.memo(() => {
    if (isEditable) {
      return (
        <>
          <TouchableOpacity
            style={[styles.button, { marginRight: 10 }]}
            onPress={() => setShowModal(true)}
          >
            <EyeIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsEditable(false)}
          >
            <SaveIcon />
          </TouchableOpacity>
        </>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsEditable(true)}
        >
          <PencilIcon />
        </TouchableOpacity>
      );
    }
  });

  return (
    <View
      style={[
        styles.createNoteContainer,
        {
          paddingTop: insects.top,
          paddingBottom: insects.bottom,
          paddingRight: insects.right,
          paddingLeft: insects.left,
        },
      ]}
    >
      <BackButton />
      <View style={styles.topLeftButtonEditableMode}>
        <TopLeftButton />
      </View>

      <View style={styles.createNoteWrapper}>
        <TextInput
          style={styles.noteTitle}
          placeholder={NOTE_TITILE_CREATE_NEW}
          editable={isEditable}
          placeholderTextColor={Colors.WHITE}
        />
        <TextInput
          style={styles.noteBody}
          placeholder={NOTE_BODY_CREATE_NEW}
          editable={isEditable}
          placeholderTextColor={Colors.WHITE}
          multiline
        />
      </View>
    </View>
  );
};

export default withRedirectAuth(CreateNoteScreen);
