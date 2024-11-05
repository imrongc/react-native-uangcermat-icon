import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const TuningSquareFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M10.2 16.725a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25M14.925 8.4a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12m7.2 6.075a2.475 2.475 0 1 1 0-4.95 2.475 2.475 0 0 1 0 4.95M16.275 8.4a2.475 2.475 0 1 1-4.95 0 2.475 2.475 0 0 1 4.95 0m-3.15 7.2c0-.373.302-.675.675-.675h4.5a.675.675 0 1 1 0 1.35h-4.5a.675.675 0 0 1-.675-.675M10.2 7.725a.675.675 0 1 1 0 1.35H5.7a.675.675 0 0 1 0-1.35zM5.025 15.6c0-.373.302-.675.675-.675h.9a.675.675 0 1 1 0 1.35h-.9a.675.675 0 0 1-.675-.675M18.3 7.725a.675.675 0 1 1 0 1.35h-.9a.675.675 0 1 1 0-1.35z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default TuningSquareFillIcon;
