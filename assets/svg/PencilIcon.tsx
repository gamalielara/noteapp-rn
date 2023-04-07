import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { Colors } from "../../utils/colors";
const PencilIcon = () => (
  <Svg width={27} height={27} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill={Colors.WHITE}
        d="m15.818 10.148 1.034 1.034L6.66 21.375H5.625V20.34l10.193-10.192Zm4.05-6.773c-.282 0-.574.112-.788.326L17.021 5.76l4.219 4.219 2.059-2.059a1.12 1.12 0 0 0 0-1.586L20.666 3.7a1.105 1.105 0 0 0-.799-.326Zm-4.05 3.589L3.375 19.406v4.219h4.219l12.442-12.443-4.219-4.218Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={Colors.WHITE} d="M0 0h27v27H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PencilIcon;
