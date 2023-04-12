import { createContext, useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import { styles } from "./styles";

export const ModalContext = createContext<any>(null);

export default (Componnent: React.FC<any>) => (props: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalPosition = useRef(new Animated.Value(9999)).current;

  modalPosition.addListener(({ value }) => value);

  useEffect(() => {
    if (showModal) {
      console.log("ON!");
      Animated.timing(modalPosition, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalPosition, {
        toValue: 999,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [showModal]);

  return (
    <>
      <View
        style={{
          ...styles.modalBox,
          top: modalPosition,
        }}
      >
        <Text>Hei!</Text>
      </View>
      <ModalContext.Provider
        value={{
          showModal: () => {
            setShowModal(true);
          },
        }}
      >
        <Componnent {...props} />
      </ModalContext.Provider>
    </>
  );
};
