import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgContractFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M16 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h8.255A7 7 0 0 1 21 11.674V7zm-2.214 13.327c.039-.727.6-1.319 1.324-1.396l.87-.092a.5.5 0 0 0 .279-.124l.651-.585a1.48 1.48 0 0 1 1.923-.05l.682.55c.08.065.18.103.284.109l.874.047c.727.039 1.319.6 1.396 1.324l.092.87c.011.104.054.201.124.279l.585.651c.487.542.508 1.357.05 1.923l-.55.682a.5.5 0 0 0-.109.284l-.047.874a1.48 1.48 0 0 1-1.324 1.396l-.87.092a.5.5 0 0 0-.279.124l-.651.585a1.48 1.48 0 0 1-1.923.05l-.682-.55a.5.5 0 0 0-.284-.109l-.874-.047a1.48 1.48 0 0 1-1.396-1.324l-.092-.87a.5.5 0 0 0-.124-.279l-.585-.651a1.48 1.48 0 0 1-.05-1.923l.55-.682a.5.5 0 0 0 .109-.284zm7.244 1.703-1.06-1.06-2.47 2.47-1.47-1.47-1.06 1.06 2 2 .53.53.53-.53z" />
  </Svg>
);
export default SvgContractFill;