import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const CheckDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
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
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={secondary}
      />
      <Path
        d="M16.8847 8.81716C17.3051 9.24003 17.3051 9.92565 16.8847 10.3485L11.7082 15.5675C11.2879 15.9903 10.6063 15.9903 10.1859 15.5675L7.31529 12.6799C6.8949 12.257 6.8949 11.5714 7.31529 11.1485C7.73568 10.7256 8.41726 10.7256 8.83765 11.1485L10.9471 13.2704L15.3623 8.81716C15.7827 8.39428 16.4643 8.39428 16.8847 8.81716Z"
        fill={fill}
      />
    </Svg>
  );
};

export default CheckDuotoneIcon;
