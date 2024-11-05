import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const InfoDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={secondary}
      />
      <Path
        d="M12 17.175C12.3728 17.175 12.675 16.8728 12.675 16.5V11.1C12.675 10.7272 12.3728 10.425 12 10.425C11.6272 10.425 11.325 10.7272 11.325 11.1V16.5C11.325 16.8728 11.6272 17.175 12 17.175Z"
        fill={fill}
      />
      <Path
        d="M12 7.5C12.497 7.5 12.9 7.90294 12.9 8.4C12.9 8.89706 12.497 9.3 12 9.3C11.5029 9.3 11.1 8.89706 11.1 8.4C11.1 7.90294 11.5029 7.5 12 7.5Z"
        fill={fill}
      />
    </Svg>
  );
};

export default InfoDuotoneIcon;
