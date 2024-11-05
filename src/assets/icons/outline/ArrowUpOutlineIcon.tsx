import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const ArrowUpOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M12 3c.304 0 .576.135.76.35l5.947 5.95a1 1 0 0 1-1.413 1.414L13 6.418V20a1 1 0 1 1-2 0V6.42l-4.294 4.295A1 1 0 1 1 5.293 9.3l5.943-5.945A1 1 0 0 1 12 3"
      />
    </Svg>
  );
};

export default ArrowUpOutlineIcon;
