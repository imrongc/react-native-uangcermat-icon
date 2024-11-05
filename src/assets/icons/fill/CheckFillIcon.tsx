import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const CheckFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-4.115-1.652c.42-.422.42-1.108 0-1.53a1.07 1.07 0 0 0-1.523 0l-4.415 4.452-2.11-2.121a1.07 1.07 0 0 0-1.522 0 1.087 1.087 0 0 0 0 1.53l2.87 2.889c.421.422 1.103.422 1.523 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CheckFillIcon;
