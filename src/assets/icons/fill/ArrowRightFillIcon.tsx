import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ArrowRightFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M4 11h9s-.006-3.416-.007-5a1 1 0 0 1 1.707-.707l5.95 5.948a.998.998 0 0 1-.005 1.523L14.7 18.707A1 1 0 0 1 12.992 18c.001-1.584.008-5 .008-5H4a1 1 0 1 1 0-2"
      />
    </Svg>
  );
};

export default ArrowRightFillIcon;
