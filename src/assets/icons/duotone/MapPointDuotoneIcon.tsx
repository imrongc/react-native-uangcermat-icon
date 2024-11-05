import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const MapPointDuotoneIcon = ({
  fill,
  secondary,
  size = 24,
}: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C8.13401 3 5 6.60232 5 10.65C5 14.666 7.23416 19.0312 10.7199 20.707C11.5325 21.0977 12.4675 21.0977 13.2801 20.707C16.7658 19.0312 19 14.666 19 10.65C19 6.60232 15.866 3 12 3Z"
        fill={secondary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.75 10.1999C13.75 11.194 12.9665 11.9999 12 11.9999C11.0335 11.9999 10.25 11.194 10.25 10.1999C10.25 9.20579 11.0335 8.3999 12 8.3999C12.9665 8.3999 13.75 9.20579 13.75 10.1999Z"
        fill={fill}
      />
    </Svg>
  );
};

export default MapPointDuotoneIcon;
