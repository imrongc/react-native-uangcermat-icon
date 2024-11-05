import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const DoubleCaretRightFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M7.26 4.35A1 1 0 0 0 5.5 5c.003 4.668-.001 9.333 0 14a1 1 0 0 0 1.76.65l6-7a1 1 0 0 0 0-1.3z"
      />
      <Path
        fill={fill}
        d="M12.26 4.35a1 1 0 0 0-1.519 1.3L16.183 12l-5.442 6.35a1 1 0 0 0 1.519 1.3l6-7a1 1 0 0 0 0-1.3z"
      />
    </Svg>
  );
};

export default DoubleCaretRightFillIcon;
