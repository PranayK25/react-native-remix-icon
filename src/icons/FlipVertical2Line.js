import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFlipVertical2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm5 6 4-4 4 4h-3v4h3l-4 4-4-4h3v-4z" />
  </Svg>
);
export default SvgFlipVertical2Line;
