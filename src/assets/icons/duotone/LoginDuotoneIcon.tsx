import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const LoginDuotoneIcon = ({
  fill,
  secondary,
  tertiary,
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
        d="M14.6667 3H13.7778C11.2636 3 10.0066 3 9.22551 3.79081C8.44446 4.58162 8.44446 5.85442 8.44446 8.4V15.6C8.44446 18.1456 8.44446 19.4184 9.22551 20.2092C10.0066 21 11.2636 21 13.7778 21H14.6667C17.1808 21 18.4379 21 19.219 20.2092C20 19.4184 20 18.1456 20 15.6V8.4C20 5.85442 20 4.58162 19.219 3.79081C18.4379 3 17.1808 3 14.6667 3Z"
        fill={secondary}
      />
      <Path
        d="M8.44444 8.4C8.44444 7.01624 8.44444 6.00858 8.5699 5.25H8.44444C6.34931 5.25 5.30175 5.25 4.65087 5.90901C4 6.56802 4 7.62868 4 9.75V14.25C4 16.3713 4 17.432 4.65087 18.091C5.30175 18.75 6.34931 18.75 8.44444 18.75H8.5699C8.44444 17.9914 8.44444 16.9838 8.44444 15.6V12.675V11.325V8.4Z"
        fill={tertiary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2492 11.5227C14.5095 11.7863 14.5095 12.2137 14.2492 12.4773L12.4714 14.2773C12.211 14.5409 11.7889 14.5409 11.5286 14.2773C11.2682 14.0137 11.2682 13.5863 11.5286 13.3227L12.1683 12.675L5.77775 12.675C5.40956 12.675 5.11108 12.3728 5.11108 12C5.11108 11.6272 5.40956 11.325 5.77775 11.325L12.1683 11.325L11.5286 10.6773C11.2682 10.4137 11.2682 9.98633 11.5286 9.72273C11.7889 9.45912 12.211 9.45912 12.4714 9.72273L14.2492 11.5227Z"
        fill={fill}
      />
    </Svg>
  );
};

export default LoginDuotoneIcon;