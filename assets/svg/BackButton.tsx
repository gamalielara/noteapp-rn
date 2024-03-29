import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { Colors } from "../../utils/colors";

export const BackButtonImage = () => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 48 48" fill="none">
      <G clip-path="url(#clip0_149_151)">
        <Path
          d="M29.42 12.42C28.64 11.64 27.38 11.64 26.6 12.42L17.42 21.6C16.64 22.38 16.64 23.64 17.42 24.42L26.6 33.6C27.38 34.38 28.64 34.38 29.42 33.6C30.2 32.82 30.2 31.56 29.42 30.78L21.66 23L29.42 15.24C30.2 14.46 30.18 13.18 29.42 12.42V12.42Z"
          fill={Colors.WHITE}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_149_151">
          <Rect width="48" height="48" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
