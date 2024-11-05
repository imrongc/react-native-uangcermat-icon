import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const CaretUpFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M11.35 8.24a1 1 0 0 1 1.3 0l7 6a1 1 0 0 1-.644 1.76c-4.667.028-9.332-.028-14 0a1 1 0 0 1-.657-1.76z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CaretUpFillIcon;
