import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ArrowUpFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M12 3c.304 0 .576.135.76.35l5.947 5.95A1 1 0 0 1 18 11.007h-5V20a1 1 0 1 1-2 0v-8.992H6A1 1 0 0 1 5.293 9.3l5.943-5.946A1 1 0 0 1 12 3"
      />
    </Svg>
  );
};

export default ArrowUpFillIcon;
