import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const BellDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M7.92374 17.9189C8.53154 19.7171 10.1227 21 11.99 21C13.8559 21 15.4462 19.7189 16.0549 17.9228C13.3646 18.4124 10.6137 18.4111 7.92374 17.9189Z"
        fill={fill}
      />
      <Path
        d="M17.9992 9.3V9.93369C17.9992 10.6942 18.2136 11.4377 18.6153 12.0704L19.5997 13.621C20.4988 15.0374 19.8124 16.9625 18.2486 17.4104C14.1576 18.5821 9.84244 18.5821 5.75143 17.4104C4.1876 16.9625 3.50118 15.0374 4.40032 13.621L5.38471 12.0704C5.78641 11.4377 6.00077 10.6942 6.00077 9.93369V9.3C6.00077 5.82061 8.68672 3 12 3C15.3133 3 17.9992 5.82061 17.9992 9.3Z"
        fill={secondary}
      />
    </Svg>
  );
};

export default BellDuotoneIcon;
