import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const MagnifierFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M20.81 20.81a.65.65 0 0 0 0-.92l-3.3-3.3a8.241 8.241 0 1 0-.92.92l3.3 3.3a.65.65 0 0 0 .92 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default MagnifierFillIcon;
