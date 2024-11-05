import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ArrowLeftFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M3.35 12.76a.997.997 0 0 1 0-1.52L9.3 5.293A1 1 0 0 1 11.007 6v5H20a1 1 0 1 1 0 2h-8.993v5a1 1 0 0 1-1.707.707z"
      />
    </Svg>
  );
};

export default ArrowLeftFillIcon;
