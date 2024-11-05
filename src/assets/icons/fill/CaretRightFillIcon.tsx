import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const CaretRightFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M8.35 4.24a1 1 0 0 1 1.41.11l6 7a1 1 0 0 1 0 1.3l-6 7A1 1 0 0 1 8 19V5c0-.281.118-.561.35-.76"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CaretRightFillIcon;
