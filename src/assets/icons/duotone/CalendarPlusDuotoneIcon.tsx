import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const CalendarPlusDuotoneIcon = ({
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
        d="M16.275 13.8C16.275 13.4272 15.9728 13.125 15.6 13.125C15.2272 13.125 14.925 13.4272 14.925 13.8V14.925H13.8C13.4272 14.925 13.125 15.2272 13.125 15.6C13.125 15.9728 13.4272 16.275 13.8 16.275H14.925V17.4C14.925 17.7728 15.2272 18.075 15.6 18.075C15.9728 18.075 16.275 17.7728 16.275 17.4V16.275H17.4C17.7728 16.275 18.075 15.9728 18.075 15.6C18.075 15.2272 17.7728 14.925 17.4 14.925H16.275V13.8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default CalendarPlusDuotoneIcon;