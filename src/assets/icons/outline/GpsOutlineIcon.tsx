import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const GpsOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M12 3c.347 0 .628.281.628.628V4.7a7.33 7.33 0 0 1 6.671 6.671h1.073a.628.628 0 1 1 0 1.256H19.3a7.33 7.33 0 0 1-6.671 6.671v1.073a.628.628 0 1 1-1.256 0V19.3a7.33 7.33 0 0 1-6.671-6.671H3.628a.628.628 0 1 1 0-1.256H4.7a7.33 7.33 0 0 1 6.671-6.671V3.628c0-.347.281-.628.628-.628m0 2.93a6.07 6.07 0 1 0 0 12.14 6.07 6.07 0 0 0 0-12.14m0 4.186a1.884 1.884 0 1 0 0 3.768 1.884 1.884 0 0 0 0-3.768M8.86 12a3.14 3.14 0 1 1 6.28 0 3.14 3.14 0 0 1-6.28 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default GpsOutlineIcon;
