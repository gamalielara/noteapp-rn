import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { styles } from "./styles";

const InfoIcon = () => (
  <Svg fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.svgWrapper}>
    <G clipPath="url(#a)">
      <Path
        d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default InfoIcon;
