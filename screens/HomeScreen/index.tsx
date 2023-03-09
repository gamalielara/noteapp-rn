import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./styles";
import SearchIcon from "../../assets/svg/SearchIcon";
import InfoIcon from "../../assets/svg/InfoIcon";

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeHeader}>
        <Text style={styles.homeText}>The NoteApp</Text>
        <View style={styles.buttonsContainer}>
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
    </View>
  );
};

export default HomeScreen;
