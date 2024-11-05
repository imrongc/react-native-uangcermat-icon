import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const ArrowLeftOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M3.35 12.76a.997.997 0 0 1 0-1.52L9.3 5.293a1 1 0 0 1 1.414 1.413L6.418 11H20a1 1 0 1 1 0 2H6.418l4.297 4.294A1 1 0 1 1 9.3 18.707z"
      />
    </Svg>
  );
};

export default ArrowLeftOutlineIcon;
