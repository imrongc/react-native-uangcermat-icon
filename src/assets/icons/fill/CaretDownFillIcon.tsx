import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const CaretDownFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M4.24 8.35A1 1 0 0 1 5 8h14a1 1 0 0 1 .651 1.76l-7 6a1 1 0 0 1-1.302 0l-7-6a1 1 0 0 1-.108-1.41"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CaretDownFillIcon;
