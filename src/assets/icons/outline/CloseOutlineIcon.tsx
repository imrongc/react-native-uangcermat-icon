import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const CloseOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M6.844 5.316a1.08 1.08 0 0 0-1.528 1.528L10.473 12l-5.157 5.156a1.08 1.08 0 0 0 1.528 1.528L12 13.527l5.156 5.157a1.08 1.08 0 1 0 1.528-1.528L13.527 12l5.157-5.156a1.08 1.08 0 0 0-1.528-1.528L12 10.473z"
      />
    </Svg>
  );
};

export default CloseOutlineIcon;
