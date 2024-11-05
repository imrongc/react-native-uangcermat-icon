import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const MinusOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M3 12a1.4 1.4 0 0 1 1.4-1.4h15.2a1.4 1.4 0 1 1 0 2.8H4.4A1.4 1.4 0 0 1 3 12"
      />
    </Svg>
  );
};

export default MinusOutlineIcon;
