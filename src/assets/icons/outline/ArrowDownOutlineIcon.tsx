import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const ArrowDownOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M12 21a1 1 0 0 1-.76-.35L5.294 14.7a1 1 0 0 1 1.413-1.414L11 17.581V4a1 1 0 1 1 2 0v13.58l4.294-4.295a1 1 0 1 1 1.413 1.415l-5.943 5.945A1 1 0 0 1 12 21"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ArrowDownOutlineIcon;
