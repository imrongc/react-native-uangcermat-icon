import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const CaretDownOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M4.24 8.35a1 1 0 0 1 1.41-.11L12 13.684l6.35-5.442a1 1 0 0 1 1.3 1.518l-7 6a1 1 0 0 1-1.3 0l-7-6a1 1 0 0 1-.11-1.41"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CaretDownOutlineIcon;
