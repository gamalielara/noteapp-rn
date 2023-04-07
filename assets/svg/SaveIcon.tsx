import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgComponent = () => (
  <Svg width={24} height={24} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M19.593 3H5.37C4.055 3 3 3.9 3 5v14c0 1.1 1.055 2 2.37 2h16.593c1.304 0 2.37-.9 2.37-2V7l-4.74-4Zm2.37 16H5.37V5H18.61l3.354 2.83V19Zm-8.296-7c-1.968 0-3.556 1.34-3.556 3s1.588 3 3.556 3c1.967 0 3.555-1.34 3.555-3s-1.588-3-3.555-3ZM6.556 6h10.666v4H6.556V6Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
