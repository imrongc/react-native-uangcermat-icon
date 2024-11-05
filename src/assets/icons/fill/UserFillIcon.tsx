import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const UserFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M12 10.2c2.071 0 3.75-1.612 3.75-3.6S14.071 3 12 3 8.25 4.612 8.25 6.6s1.679 3.6 3.75 3.6M12 21c7.5 0 7.5-1.813 7.5-4.05S16.142 12.9 12 12.9s-7.5 1.813-7.5 4.05S4.5 21 12 21"
      />
    </Svg>
  );
};

export default UserFillIcon;
