import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const CaretLeftFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M15.65 4.24c.233.2.352.483.35.766-.028 4.668.028 9.333 0 14a1 1 0 0 1-1.76.645l-6-7a1 1 0 0 1 0-1.302l6-7a1 1 0 0 1 1.41-.108"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CaretLeftFillIcon;
