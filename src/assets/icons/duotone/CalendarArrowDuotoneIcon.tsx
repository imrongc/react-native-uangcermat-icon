import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const CalendarArrowDuotoneIcon = ({
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
        d="M21 13.8V12C21 11.2449 20.9886 9.89879 20.977 9.30005H3.00527C2.99366 9.89879 3.00508 11.2449 3.00508 12V13.8C3.00508 17.1942 3.00508 18.8912 4.05919 19.9456C5.11331 21 6.80989 21 10.203 21H13.802C17.1952 21 18.8918 21 19.9459 19.9456C21 18.8912 21 17.1942 21 13.8Z"
        fill={secondary}
      />
      <Path
        d="M8.14444 3.62308C8.14444 3.27896 7.83982 3 7.46405 3C7.08828 3 6.78366 3.27896 6.78366 3.62308V4.93508C5.47791 5.03083 4.62071 5.26582 3.99094 5.84254C3.36117 6.41926 3.10456 7.20425 3 8.4V9.3H21V8.4C20.8954 7.20425 20.6388 6.41926 20.0091 5.84254C19.3793 5.26582 18.5221 5.03083 17.2163 4.93508V3.62308C17.2163 3.27896 16.9117 3 16.536 3C16.1602 3 15.8556 3.27896 15.8556 3.62308V4.87995C15.252 4.86923 14.5755 4.86923 13.8144 4.86923H10.1856C9.42446 4.86923 8.74796 4.86923 8.14444 4.87995V3.62308Z"
        fill={fill}
      />
      <Path
        d="M17.1049 13.3383L18.7924 15.1383C19.0359 15.398 19.0359 15.802 18.7924 16.0617L17.1049 17.8617C16.85 18.1336 16.4228 18.1474 16.1508 17.8924C15.8789 17.6375 15.8651 17.2103 16.1201 16.9383L16.7419 16.275H13.8C13.4272 16.275 13.125 15.9728 13.125 15.6C13.125 15.2272 13.4272 14.925 13.8 14.925L16.7419 14.925L16.1201 14.2617C15.8651 13.9897 15.8789 13.5625 16.1508 13.3076C16.4228 13.0526 16.85 13.0664 17.1049 13.3383Z"
        fill={fill}
      />
    </Svg>
  );
};

export default CalendarArrowDuotoneIcon;
