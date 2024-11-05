import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const CalendarDuotoneIcon = ({
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
        d="M21.0004 13.8V12C21.0004 11.2449 20.9974 9.89866 20.9858 9.29993H3.00913C2.99752 9.89866 3.00045 11.2449 3.00045 12V13.8C3.00045 17.1941 3.00045 18.8911 4.05486 19.9455C5.10927 21 6.80632 21 10.2004 21H13.8004C17.1945 21 18.8916 21 19.946 19.9455C21.0004 18.8911 21.0004 17.1941 21.0004 13.8Z"
        fill={secondary}
      />
      <Path
        d="M8.1244 3.65172C8.1244 3.29179 7.82099 3 7.44672 3C7.07245 3 6.76905 3.29179 6.76905 3.65172V5.02404C5.46851 5.12419 4.61473 5.36998 3.98747 5.97322C3.36022 6.57645 3.10463 7.39753 3.00049 8.64825V9.29997H21.0004L20.9287 8.64825C20.8245 7.39753 20.5689 6.57645 19.9417 5.97322C19.3144 5.36998 18.4606 5.12419 17.1601 5.02404V3.65172C17.1601 3.29179 16.8567 3 16.4824 3C16.1082 3 15.8047 3.29179 15.8047 3.65172V4.96638C15.2036 4.95516 14.5298 4.95516 13.7717 4.95516H10.1574C9.39931 4.95516 8.72552 4.95516 8.1244 4.96638V3.65172Z"
        fill={fill}
      />
      <Path
        d="M16.5004 13.8C16.9975 13.8 17.4004 13.3971 17.4004 12.9C17.4004 12.4029 16.9975 12 16.5004 12C16.0033 12 15.6004 12.4029 15.6004 12.9C15.6004 13.3971 16.0033 13.8 16.5004 13.8Z"
        fill={fill}
      />
      <Path
        d="M16.5004 17.4C16.9975 17.4 17.4004 16.997 17.4004 16.5C17.4004 16.0029 16.9975 15.6 16.5004 15.6C16.0033 15.6 15.6004 16.0029 15.6004 16.5C15.6004 16.997 16.0033 17.4 16.5004 17.4Z"
        fill={fill}
      />
      <Path
        d="M12.9004 12.9C12.9004 13.3971 12.4975 13.8 12.0004 13.8C11.5033 13.8 11.1004 13.3971 11.1004 12.9C11.1004 12.4029 11.5033 12 12.0004 12C12.4975 12 12.9004 12.4029 12.9004 12.9Z"
        fill={fill}
      />
      <Path
        d="M12.9004 16.5C12.9004 16.997 12.4975 17.4 12.0004 17.4C11.5033 17.4 11.1004 16.997 11.1004 16.5C11.1004 16.0029 11.5033 15.6 12.0004 15.6C12.4975 15.6 12.9004 16.0029 12.9004 16.5Z"
        fill={fill}
      />
      <Path
        d="M7.5004 13.8C7.99745 13.8 8.4004 13.3971 8.4004 12.9C8.4004 12.4029 7.99745 12 7.5004 12C7.00335 12 6.6004 12.4029 6.6004 12.9C6.6004 13.3971 7.00335 13.8 7.5004 13.8Z"
        fill={fill}
      />
      <Path
        d="M7.5004 17.4C7.99745 17.4 8.4004 16.997 8.4004 16.5C8.4004 16.0029 7.99745 15.6 7.5004 15.6C7.00335 15.6 6.6004 16.0029 6.6004 16.5C6.6004 16.997 7.00335 17.4 7.5004 17.4Z"
        fill={fill}
      />
    </Svg>
  );
};

export default CalendarDuotoneIcon;
