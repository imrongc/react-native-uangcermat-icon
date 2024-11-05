import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const CloseDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
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
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        fill={secondary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.31632 8.31632C8.73809 7.89456 9.42191 7.89456 9.84368 8.31632L12 10.4727L14.1563 8.31635C14.5781 7.89459 15.2619 7.89459 15.6837 8.31635C16.1054 8.73812 16.1054 9.42194 15.6837 9.8437L13.5274 12L15.6836 14.1563C16.1054 14.5781 16.1054 15.2619 15.6836 15.6836C15.2619 16.1054 14.5781 16.1054 14.1563 15.6836L12 13.5274L9.84371 15.6837C9.42194 16.1054 8.73812 16.1054 8.31636 15.6837C7.89459 15.2619 7.89459 14.5781 8.31636 14.1563L10.4727 12L8.31632 9.84367C7.89456 9.42191 7.89456 8.73809 8.31632 8.31632Z"
        fill={fill}
      />
    </Svg>
  );
};

export default CloseDuotoneIcon;
