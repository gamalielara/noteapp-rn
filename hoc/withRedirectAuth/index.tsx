import { useContext } from "react";
import { AuthContext } from "../../modules/auth/authContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default (Component: React.FC<any>) => (props: any) => {
  const { user } = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  if (user) {
    return <Component {...props} />;
  } else {
    navigation.navigate("Login");
    return null;
  }
};
