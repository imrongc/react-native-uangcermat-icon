import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const ArrowRightOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M4 11h13.581l-4.295-4.294A1 1 0 1 1 14.7 5.293l5.95 5.948a.998.998 0 0 1-.005 1.523L14.7 18.707a1 1 0 0 1-1.415-1.413L17.581 13H4a1 1 0 1 1 0-2"
      />
    </Svg>
  );
};

export default ArrowRightOutlineIcon;
