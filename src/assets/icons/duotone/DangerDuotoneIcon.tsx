import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const DangerDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
        fill={secondary}
      />
      <Path
        d="M12 6.82495C12.3728 6.82495 12.675 7.12716 12.675 7.49995V12.9C12.675 13.2727 12.3728 13.575 12 13.575C11.6272 13.575 11.325 13.2727 11.325 12.9V7.49995C11.325 7.12716 11.6272 6.82495 12 6.82495Z"
        fill={fill}
      />
      <Path
        d="M12 16.5C12.497 16.5 12.9 16.097 12.9 15.6C12.9 15.1029 12.497 14.7 12 14.7C11.5029 14.7 11.1 15.1029 11.1 15.6C11.1 16.097 11.5029 16.5 12 16.5Z"
        fill={fill}
      />
    </Svg>
  );
};

export default DangerDuotoneIcon;
