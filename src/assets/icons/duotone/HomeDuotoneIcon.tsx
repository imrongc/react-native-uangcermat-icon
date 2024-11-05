import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const HomeDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
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
        d="M3.46728 8.24047C3 9.09415 3 10.1239 3 12.1835V13.5525C3 17.0633 3 18.8187 4.05442 19.9093C5.10883 21 6.80589 21 10.2 21H13.8C17.1941 21 18.8912 21 19.9456 19.9093C21 18.8187 21 17.0633 21 13.5525V12.1835C21 10.1239 21 9.09415 20.5327 8.24047C20.0654 7.38679 19.2118 6.85696 17.5044 5.79731L15.7044 4.68018C13.8996 3.56006 12.9971 3 12 3C11.0029 3 10.1004 3.56006 8.29563 4.68018L6.49563 5.79731C4.78825 6.85696 3.93456 7.38679 3.46728 8.24047Z"
        fill={secondary}
      />
      <Path
        d="M8.625 17.4C8.625 17.0272 8.92721 16.725 9.3 16.725H14.7C15.0728 16.725 15.375 17.0272 15.375 17.4C15.375 17.7728 15.0728 18.075 14.7 18.075H9.3C8.92721 18.075 8.625 17.7728 8.625 17.4Z"
        fill={fill}
      />
    </Svg>
  );
};

export default HomeDuotoneIcon;
