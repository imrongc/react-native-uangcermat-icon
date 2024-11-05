import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const HamburgerMenuFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M4.318 19.682C5.636 21 7.758 21 12 21s6.364 0 7.682-1.318S21 16.242 21 12s0-6.364-1.318-7.682S16.242 3 12 3 5.636 3 4.318 4.318 3 7.758 3 12s0 6.364 1.318 7.682M18.075 15.6a.675.675 0 0 1-.675.675H6.6a.675.675 0 1 1 0-1.35h10.8c.373 0 .675.302.675.675m-.675-2.925a.675.675 0 1 0 0-1.35H6.6a.675.675 0 1 0 0 1.35zm.675-4.275a.675.675 0 0 1-.675.675H6.6a.675.675 0 0 1 0-1.35h10.8c.373 0 .675.302.675.675"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default HamburgerMenuFillIcon;
