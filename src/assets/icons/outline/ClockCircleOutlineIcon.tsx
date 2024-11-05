import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const ClockCircleOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M12 4.256a7.744 7.744 0 1 0 0 15.488 7.744 7.744 0 0 0 0-15.488M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-3.977c.347 0 .628.281.628.628v3.089l1.909 1.909a.628.628 0 0 1-.888.888l-2.093-2.093a.63.63 0 0 1-.184-.444V8.651c0-.347.281-.628.628-.628"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ClockCircleOutlineIcon;
