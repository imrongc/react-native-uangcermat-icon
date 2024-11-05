import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const MapPointFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M12 3c-3.866 0-7 3.602-7 7.65 0 4.016 2.234 8.381 5.72 10.057.813.39 1.747.39 2.56 0C16.766 19.031 19 14.666 19 10.65 19 6.602 15.866 3 12 3m0 9c.966 0 1.75-.806 1.75-1.8S12.966 8.4 12 8.4s-1.75.806-1.75 1.8S11.034 12 12 12"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default MapPointFillIcon;
