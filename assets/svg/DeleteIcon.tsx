import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DeleteIcon = () => (
  <Svg
    height="100%"
    viewBox="-10.5 -5 50 50"
    fill="none"
    style={{
      maxHeight: 35,
      aspectRatio: 1,
    }}
  >
    <Path
      d="M2 32.809c0 2.246 1.8 4.085 4 4.085h16c2.2 0 4-1.839 4-4.085V8.298H2v24.51ZM28 2.17h-7L19 .128H9L7 2.17H0v4.085h28V2.17Z"
      fill="#fff"
    />
  </Svg>
);

export default DeleteIcon;
