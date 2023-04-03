import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../modules/auth/authContext";
import withRedirectAuth from "../../hoc/withRedirectAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import BackButton from "../../components/BackButton";

const ProfileScreen: React.FC<NativeStackScreenProps<any>> = () => {
  const { user } = useContext(AuthContext);

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
