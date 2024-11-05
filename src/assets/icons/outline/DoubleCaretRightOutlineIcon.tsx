import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const DoubleCaretRightOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M7.26 4.35a1 1 0 1 0-1.52 1.3L11.184 12 5.74 18.35a1 1 0 0 0 1.518 1.3l6-7a1 1 0 0 0 0-1.3z"
      />
      <Path
        fill={fill}
        d="M12.26 4.35a1 1 0 0 0-1.52 1.3L16.184 12l-5.442 6.35a1 1 0 1 0 1.518 1.3l6-7a1 1 0 0 0 0-1.3z"
      />
    </Svg>
  );
};

export default DoubleCaretRightOutlineIcon;
