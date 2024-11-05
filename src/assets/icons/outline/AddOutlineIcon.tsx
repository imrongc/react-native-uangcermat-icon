import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const AddOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M4.4 10.85h6.45V4.4a1.15 1.15 0 0 1 2.3 0v6.45h6.45a1.15 1.15 0 1 1 0 2.3h-6.45v6.45a1.15 1.15 0 0 1-2.3 0v-6.45H4.4a1.15 1.15 0 0 1 0-2.3"
      />
    </Svg>
  );
};

export default AddOutlineIcon;
