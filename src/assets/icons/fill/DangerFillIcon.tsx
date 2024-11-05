import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const DangerFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0m-9-5.175c.373 0 .675.302.675.675v5.4a.675.675 0 1 1-1.35 0V7.5c0-.373.302-.675.675-.675m0 9.675a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default DangerFillIcon;
