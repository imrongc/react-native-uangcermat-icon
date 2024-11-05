import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const HeartDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
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
        d="M8.49565 17.9059C5.96837 15.895 3 13.5333 3 9.43912C3 4.91943 7.95014 1.71415 12 6.05933V20C11.1 20 10.2 19.2838 9.26556 18.523C9.01624 18.3201 8.75832 18.1149 8.49565 17.9059Z"
        fill={secondary}
      />
      <Path
        d="M14.7344 18.523C17.3825 16.3673 21 13.9588 21 9.43912C21 4.91943 16.0499 1.71415 12 6.05933V20C12.9 20 13.8 19.2838 14.7344 18.523Z"
        fill={fill}
      />
    </Svg>
  );
};

export default HeartDuotoneIcon;
