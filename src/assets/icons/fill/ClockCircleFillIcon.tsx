import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ClockCircleFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path fill={fill} d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M12 7.725c.373 0 .675.302.675.675v3.32l2.052 2.053a.675.675 0 0 1-.954.954l-2.25-2.25a.68.68 0 0 1-.198-.477V8.4c0-.373.302-.675.675-.675"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ClockCircleFillIcon;
