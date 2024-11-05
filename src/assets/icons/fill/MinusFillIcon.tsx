import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const MinusFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M6.79 12c0-.597.484-1.08 1.08-1.08h8.26a1.08 1.08 0 0 1 0 2.16H7.87A1.08 1.08 0 0 1 6.79 12"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default MinusFillIcon;
