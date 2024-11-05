import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const CalendarCloseFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M8.175 3.667A.67.67 0 0 0 7.5 3a.67.67 0 0 0-.675.667V5.07c-1.295.103-2.146.354-2.77.971s-.88 1.457-.984 2.737H20.93c-.104-1.28-.359-2.12-.983-2.737-.625-.617-1.476-.868-2.771-.97V3.666A.67.67 0 0 0 16.5 3a.67.67 0 0 0-.675.667V5.01C15.226 5 14.555 5 13.8 5h-3.6c-.755 0-1.426 0-2.025.011z"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M21 12.111v1.778c0 3.352 0 5.028-1.054 6.07C18.89 21 13.8 21 13.8 21h-3.6c-3.394 0-5.091 0-6.146-1.041C3 18.917 3 17.24 3 13.889V12.11c0-.746 0-1.408.012-2h17.976c.012.591.012 1.254.012 2m-7.677 1.306a.68.68 0 0 1 .954 0l.873.862.873-.861a.68.68 0 0 1 .954 0 .66.66 0 0 1 0 .942l-.872.862.872.862a.66.66 0 0 1 0 .943.68.68 0 0 1-.954 0l-.873-.862-.873.862a.68.68 0 0 1-.954 0 .66.66 0 0 1 0-.943l.872-.862-.872-.862a.66.66 0 0 1 0-.942"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CalendarCloseFillIcon;
