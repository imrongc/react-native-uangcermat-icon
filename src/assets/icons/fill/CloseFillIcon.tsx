import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const CloseFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M9.844 8.316a1.08 1.08 0 0 0-1.528 1.528L10.473 12l-2.157 2.156a1.08 1.08 0 0 0 1.528 1.528L12 13.527l2.156 2.157a1.08 1.08 0 1 0 1.528-1.528L13.527 12l2.157-2.156a1.08 1.08 0 0 0-1.528-1.528L12 10.473z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CloseFillIcon;
