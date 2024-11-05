import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const DoubleCaretUpOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M12.65 5.74a1 1 0 0 0-1.3 0l-7 6a1 1 0 0 0 1.3 1.52L12 7.816l6.35 5.442a1 1 0 0 0 1.3-1.518z"
      />
      <Path
        fill={fill}
        d="m19.65 16.74-7-6a1 1 0 0 0-1.3 0l-7 6a1 1 0 0 0 1.3 1.52L12 12.816l6.35 5.442a1 1 0 0 0 1.3-1.518"
      />
    </Svg>
  );
};

export default DoubleCaretUpOutlineIcon;
