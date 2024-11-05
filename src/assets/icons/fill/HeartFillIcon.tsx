import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const HeartFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M3 9.44c0 4.519 3.617 6.927 6.266 9.083C10.2 19.283 11.1 20 12 20s1.8-.716 2.734-1.477C17.383 16.367 21 13.959 21 9.439s-4.95-7.725-9-3.38C7.95 1.714 3 4.92 3 9.44"
      />
    </Svg>
  );
};

export default HeartFillIcon;
