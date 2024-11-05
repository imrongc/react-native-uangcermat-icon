import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const DoubleCaretLeftOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M13.26 5.65a1 1 0 0 0-1.52-1.3l-6 7a1 1 0 0 0 0 1.3l6 7a1 1 0 0 0 1.52-1.3L7.816 12z"
      />
      <Path
        fill={fill}
        d="M18.26 5.65a1 1 0 0 0-1.52-1.3l-6 7a1 1 0 0 0 0 1.3l6 7a1 1 0 0 0 1.52-1.3L12.816 12z"
      />
    </Svg>
  );
};

export default DoubleCaretLeftOutlineIcon;
