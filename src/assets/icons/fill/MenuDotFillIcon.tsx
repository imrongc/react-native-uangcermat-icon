import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const MenuDotFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </Svg>
  );
};

export default MenuDotFillIcon;
