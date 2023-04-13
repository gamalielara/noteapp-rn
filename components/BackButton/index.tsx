import { Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { BackButtonImage } from "../../assets/svg/BackButton";
import { useNavigation } from "@react-navigation/native";

const BackButton: React.FC = () => {
  const insects = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.backButton, { marginTop: insects.top }]}
      onPress={() => navigation.goBack()}
    >
      <BackButtonImage />
    </TouchableOpacity>
  );
};

export default BackButton;
