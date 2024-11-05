import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const DoubleCaretDownOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M5.65 5.74a1 1 0 0 0-1.3 1.52l7 6a1 1 0 0 0 1.3 0l7-6a1 1 0 0 0-1.3-1.52L12 11.184z"
      />
      <Path
        fill={fill}
        d="M5.65 10.74a1 1 0 1 0-1.3 1.52l7 6a1 1 0 0 0 1.3 0l7-6a1 1 0 0 0-1.3-1.52L12 16.184z"
      />
    </Svg>
  );
};

export default DoubleCaretDownOutlineIcon;
