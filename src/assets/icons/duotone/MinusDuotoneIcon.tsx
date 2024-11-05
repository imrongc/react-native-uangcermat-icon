import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const MinusDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
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
        d="M7.87062 10.92C7.27415 10.92 6.79062 11.4036 6.79062 12C6.79062 12.5965 7.27415 13.08 7.87062 13.08L16.1296 13.08C16.7261 13.08 17.2096 12.5965 17.2096 12C17.2096 11.4036 16.7261 10.92 16.1296 10.92L7.87062 10.92Z"
        fill={fill}
      />
    </Svg>
  );
};

export default MinusDuotoneIcon;
