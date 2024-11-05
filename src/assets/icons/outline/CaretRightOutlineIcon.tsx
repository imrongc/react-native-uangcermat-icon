import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const CaretRightOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M8.35 4.24a1 1 0 0 1 1.41.11l6 7a1 1 0 0 1 0 1.3l-6 7a1 1 0 0 1-1.52-1.3L13.684 12 8.24 5.65a1 1 0 0 1 .108-1.41"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CaretRightOutlineIcon;
