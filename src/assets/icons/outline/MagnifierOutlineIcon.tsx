import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const MagnifierOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M11.581 4.256a7.326 7.326 0 1 0 0 14.651 7.326 7.326 0 0 0 0-14.651M3 11.58a8.581 8.581 0 1 1 15.077 5.608l2.74 2.74a.628.628 0 0 1-.889.887l-2.739-2.739A8.581 8.581 0 0 1 3 11.581"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default MagnifierOutlineIcon;
