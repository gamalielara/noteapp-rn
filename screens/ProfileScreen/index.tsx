import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../modules/auth/authContext";
import withRedirectAuth from "../../hoc/withRedirectAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";

const ProfileScreen: React.FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const { user } = useContext(AuthContext);

  const insects = useSafeAreaInsets();

  return (
    <View style={styles.profileContainer}>
      <BackButton />
      <View>
        <Image style={styles.profileImage} source={{ uri: user?.picture }} />
        <Text style={styles.profileName}>Hello, {user?.name}!</Text>
        <Text style={styles.profileEmail}>{user?.email}</Text>
      </View>
    </View>
  );
};

export default withRedirectAuth(ProfileScreen);
