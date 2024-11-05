import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const UserDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M12 10.2C14.0711 10.2 15.75 8.58822 15.75 6.6C15.75 4.61177 14.0711 3 12 3C9.92893 3 8.25 4.61177 8.25 6.6C8.25 8.58822 9.92893 10.2 12 10.2Z"
        fill={fill}
      />
      <Path
        d="M12 20.9999C19.5 20.9999 19.5 19.1867 19.5 16.9499C19.5 14.7131 16.1421 12.8999 12 12.8999C7.85786 12.8999 4.5 14.7131 4.5 16.9499C4.5 19.1867 4.5 20.9999 12 20.9999Z"
        fill={secondary}
      />
    </Svg>
  );
};

export default UserDuotoneIcon;
