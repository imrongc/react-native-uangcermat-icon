import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const DoubleCaretDownFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M5 5.5a1 1 0 0 0-.651 1.76l7 6a1 1 0 0 0 1.302 0l7-6a1 1 0 0 0-.652-1.76z"
      />
      <Path
        fill={fill}
        d="M5.65 10.74a1 1 0 1 0-1.3 1.52l7 6a1 1 0 0 0 1.3 0l7-6a1 1 0 0 0-1.3-1.52L12 16.184z"
      />
    </Svg>
  );
};

export default DoubleCaretDownFillIcon;
