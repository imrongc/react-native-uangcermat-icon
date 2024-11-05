import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ArrowDownFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M12 21a1 1 0 0 1-.76-.35L5.294 14.7A1 1 0 0 1 6 12.993c1.585 0 3.285.118 5 .001V4a1 1 0 1 1 2 0v8.993c1.708.116 3.469-.059 5.038 0a1 1 0 0 1 .669 1.706l-5.943 5.946A1 1 0 0 1 12 21"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ArrowDownFillIcon;
