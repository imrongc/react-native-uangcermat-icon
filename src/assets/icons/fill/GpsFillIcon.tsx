import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const GpsFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M3 12c0 .347.281.628.628.628H5.33a6.7 6.7 0 0 0 6.041 6.04v1.704a.628.628 0 1 0 1.256 0V18.67a6.7 6.7 0 0 0 6.04-6.041h1.704a.628.628 0 1 0 0-1.256H18.67a6.7 6.7 0 0 0-6.041-6.04V3.627a.628.628 0 1 0-1.256 0V5.33a6.7 6.7 0 0 0-6.04 6.041H3.627A.63.63 0 0 0 3 12m5.86 0a3.14 3.14 0 1 1 6.28 0 3.14 3.14 0 0 1-6.28 0"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        d="M10.116 12a1.884 1.884 0 1 1 3.768 0 1.884 1.884 0 0 1-3.768 0"
      />
    </Svg>
  );
};

export default GpsFillIcon;
