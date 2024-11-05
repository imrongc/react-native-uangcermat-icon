import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const CaretUpOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M11.35 8.24a1 1 0 0 1 1.3 0l7 6a1 1 0 0 1-1.3 1.52L12 10.316 5.65 15.76a1 1 0 0 1-1.3-1.518z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CaretUpOutlineIcon;
