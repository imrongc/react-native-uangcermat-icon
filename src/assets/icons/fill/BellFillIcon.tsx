import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const BellFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M8.757 19.418A4.1 4.1 0 0 0 12 21c1.32 0 2.495-.62 3.243-1.582a23.9 23.9 0 0 1-6.486 0M18 9.3v.634c0 .76.214 1.504.615 2.136l.985 1.551c.899 1.416.212 3.341-1.351 3.79a22.66 22.66 0 0 1-12.498 0c-1.563-.449-2.25-2.374-1.35-3.79l.984-1.55A4 4 0 0 0 6 9.933V9.3C6 5.82 8.687 3 12 3s6 2.82 6 6.3"
      />
    </Svg>
  );
};

export default BellFillIcon;
