import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const CaretLeftOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M15.65 4.24a1 1 0 0 1 .11 1.41L10.316 12l5.442 6.35a1 1 0 0 1-1.518 1.3l-6-7a1 1 0 0 1 0-1.3l6-7a1 1 0 0 1 1.41-.11"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CaretLeftOutlineIcon;
