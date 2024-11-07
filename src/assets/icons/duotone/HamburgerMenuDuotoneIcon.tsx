import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const HamburgerMenuDuotoneIcon = ({
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
        d="M12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21Z"
        fill={secondary}
      />
      <Path
        d="M18.075 8.39998C18.075 8.77277 17.7728 9.07498 17.4 9.07498H6.60005C6.22726 9.07498 5.92505 8.77277 5.92505 8.39998C5.92505 8.02718 6.22726 7.72498 6.60005 7.72498H17.4C17.7728 7.72498 18.075 8.02718 18.075 8.39998Z"
        fill={fill}
      />
      <Path
        d="M18.075 12C18.075 12.3728 17.7728 12.675 17.4 12.675H6.60005C6.22726 12.675 5.92505 12.3728 5.92505 12C5.92505 11.6272 6.22726 11.325 6.60005 11.325H17.4C17.7728 11.325 18.075 11.6272 18.075 12Z"
        fill={fill}
      />
      <Path
        d="M18.075 15.6C18.075 15.9728 17.7728 16.275 17.4 16.275H6.60005C6.22726 16.275 5.92505 15.9728 5.92505 15.6C5.92505 15.2272 6.22726 14.925 6.60005 14.925H17.4C17.7728 14.925 18.075 15.2272 18.075 15.6Z"
        fill={fill}
      />
    </Svg>
  );
};

export default HamburgerMenuDuotoneIcon;