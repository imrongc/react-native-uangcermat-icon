import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const ClockCircleDuotoneIcon = ({
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
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.725C12.3728 7.725 12.675 8.02721 12.675 8.4V11.7204L14.7273 13.7727C14.9909 14.0363 14.9909 14.4637 14.7273 14.7273C14.4637 14.9909 14.0363 14.9909 13.7727 14.7273L11.5227 12.4773C11.3961 12.3507 11.325 12.179 11.325 12V8.4C11.325 8.02721 11.6272 7.725 12 7.725Z"
        fill="white"
      />
      <Path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        fill={secondary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.72498C12.3728 7.72498 12.675 8.02718 12.675 8.39998V11.7204L14.7273 13.7727C14.9909 14.0363 14.9909 14.4637 14.7273 14.7273C14.4637 14.9909 14.0363 14.9909 13.7727 14.7273L11.5227 12.4773C11.3961 12.3507 11.325 12.179 11.325 12V8.39998C11.325 8.02718 11.6272 7.72498 12 7.72498Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ClockCircleDuotoneIcon;
