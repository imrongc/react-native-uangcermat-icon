import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const DoubleCaretLeftFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M18.5 5.007a1 1 0 0 0-1.76-.657l-6 7a1 1 0 0 0 0 1.3l6 7a1 1 0 0 0 1.76-.644z"
      />
    </Svg>
  );
};

export default DoubleCaretLeftFillIcon;
