import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const MagnifierDuotoneIcon = ({
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
        d="M19.4824 11.2414C19.4824 15.793 15.7926 19.4829 11.2409 19.4829C6.68933 19.4829 2.99951 15.793 2.99951 11.2414C2.99951 6.68982 6.68933 3 11.2409 3C15.7926 3 19.4824 6.68982 19.4824 11.2414Z"
        fill={secondary}
      />
      <Path
        d="M16.5903 17.511L19.8902 20.8108C20.1443 21.0649 20.5562 21.0649 20.8103 20.8108C21.0644 20.5567 21.0644 20.1448 20.8103 19.8907L17.5105 16.5908C17.2284 16.9211 16.9206 17.2289 16.5903 17.511Z"
        fill={fill}
      />
    </Svg>
  );
};

export default MagnifierDuotoneIcon;
