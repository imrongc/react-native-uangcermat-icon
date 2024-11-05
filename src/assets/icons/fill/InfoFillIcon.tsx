import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const InfoFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9 5.175a.675.675 0 0 0 .675-.675v-5.4a.675.675 0 1 0-1.35 0v5.4c0 .373.302.675.675.675M12 7.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default InfoFillIcon;
