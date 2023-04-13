import { createContext, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export const ModalContext = createContext<any>(null);

export default (Componnent: React.FC<any>) => (props: any) => {
  const { height } = Dimensions.get("window");

  const [showModal, setShowModal] = useState<boolean>(false);
  const modalPositionAnimation = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (showModal) {
      console.log("SHOW MODAL!");
      Animated.timing(modalPositionAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      console.log("CLOSED");
      Animated.timing(modalPositionAnimation, {
        toValue: height,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [showModal]);

  const rotatingEnteringModal = modalPositionAnimation.interpolate({
    inputRange: [0, height / 4, height / 2, height],
    outputRange: ["0deg", "-90deg", "-170deg", "-180deg"],
  });

  return (
    <>
      <Animated.View
        style={{
          ...styles.modalBox,
          transform: [
            { translateY: modalPositionAnimation },
            { rotateY: rotatingEnteringModal },
          ],
        }}
      >
        <Text>Hei!</Text>
        <View style={styles.bottomBottons}>
          <TouchableOpacity
            style={styles.discardButton}
            onPress={() => setShowModal(false)}
          >
            <Text style={styles.buttonText}>Discard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowModal(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      {showModal && <View style={styles.showModalContainer}></View>}
      {/*<View style={styles.showModalContainer}></View>*/}
      <ModalContext.Provider
        value={{
          setShowModal,
        }}
      >
        <Componnent {...props} />
      </ModalContext.Provider>
    </>
  );
};
