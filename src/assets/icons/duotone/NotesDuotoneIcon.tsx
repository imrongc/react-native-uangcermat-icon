import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const NotesDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
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
        d="M20.3065 10.8448L19.8307 12.5836C19.2753 14.6134 18.9976 15.6283 18.3681 16.2865C17.871 16.8063 17.2277 17.17 16.5196 17.3317C16.4311 17.3519 16.3413 17.3675 16.2492 17.3786C15.4081 17.4802 14.3819 17.2109 12.5137 16.7206C10.441 16.1768 9.40462 15.9048 8.73248 15.2883C8.20176 14.8015 7.83036 14.1716 7.66525 13.4781C7.45613 12.5998 7.73382 11.5849 8.2892 9.55509L8.76497 7.81623C8.84482 7.52439 8.91899 7.25334 8.98923 7.0015C9.4075 5.50189 9.68858 4.67687 10.2276 4.1133C10.7246 3.59357 11.3679 3.22986 12.0761 3.06816C12.9729 2.86337 14.0093 3.13531 16.082 3.6792C18.1547 4.22308 19.191 4.49502 19.8632 5.11152C20.3939 5.5983 20.7653 6.22827 20.9304 6.92176C21.1395 7.80005 20.8618 8.81495 20.3065 10.8448ZM11.3203 10.0261C11.4189 9.66595 11.7968 9.45223 12.1646 9.54873L16.6036 10.7135C16.9714 10.81 17.1896 11.1802 17.0911 11.5403C16.9925 11.9005 16.6145 12.1142 16.2468 12.0177L11.8078 10.8529C11.44 10.7564 11.2218 10.3862 11.3203 10.0261ZM10.6063 12.6341C10.7048 12.274 11.0828 12.0602 11.4506 12.1567L14.114 12.8556C14.4817 12.9521 14.7 13.3223 14.6014 13.6824C14.5029 14.0425 14.1249 14.2563 13.7572 14.1598L11.0937 13.4609C10.726 13.3644 10.5078 12.9942 10.6063 12.6341Z"
        fill={fill}
      />
      <Path
        d="M16.2491 17.3786C16.0574 17.9532 15.7205 18.473 15.2675 18.8885C14.5954 19.505 13.559 19.7769 11.4863 20.3208C9.41364 20.8647 8.37729 21.1366 7.48043 20.9318C6.77228 20.7701 6.129 20.4064 5.63193 19.8867C5.0024 19.2285 4.72471 18.2136 4.16933 16.1838L3.69355 14.4449C3.13817 12.4151 2.86049 11.4002 3.0696 10.5219C3.23472 9.82842 3.60612 9.19845 4.13684 8.71167C4.80898 8.09517 5.84533 7.82323 7.91803 7.27935C8.31015 7.17646 8.6652 7.08329 8.98921 7.00125C8.98919 7.00135 8.98924 7.00115 8.98921 7.00125C8.91897 7.25309 8.84481 7.52441 8.76496 7.81625L8.28918 9.55511C7.7338 11.5849 7.45611 12.5998 7.66523 13.4781C7.83035 14.1716 8.20175 14.8016 8.73246 15.2883C9.40461 15.9048 10.441 16.1768 12.5137 16.7207C14.3818 17.2109 15.4081 17.4802 16.2491 17.3786Z"
        fill={secondary}
      />
    </Svg>
  );
};

export default NotesDuotoneIcon;