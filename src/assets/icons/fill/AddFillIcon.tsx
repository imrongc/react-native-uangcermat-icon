import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const AddFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M6.79 12c0-.597.484-1.08 1.08-1.08h3.05V7.87a1.08 1.08 0 0 1 2.16 0v3.05h3.05a1.08 1.08 0 0 1 0 2.16h-3.05v3.05a1.08 1.08 0 1 1-2.16 0v-3.05H7.87A1.08 1.08 0 0 1 6.79 12"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default AddFillIcon;
