import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const RestartFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m3.541-14.768c.254.104.42.351.42.626V9.3a.675.675 0 0 1-.675.675H12.9a.675.675 0 0 1-.483-1.147l.685-.702a3.75 3.75 0 0 0-3.801.98C7.8 10.644 7.8 13.142 9.3 14.68a3.75 3.75 0 0 0 5.398 0 3.95 3.95 0 0 0 1.087-2.225c.053-.376.351-.693.731-.693.365 0 .668.293.633.656a5.3 5.3 0 0 1-1.485 3.205 5.1 5.1 0 0 1-7.33 0c-2.013-2.061-2.013-5.397 0-7.458a5.1 5.1 0 0 1 5.793-1.087l.676-.691a.675.675 0 0 1 .737-.154"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default RestartFillIcon;
