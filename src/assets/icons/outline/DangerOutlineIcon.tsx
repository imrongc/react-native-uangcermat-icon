import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const DangerOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M12 7.186c.347 0 .628.281.628.628v5.023a.628.628 0 1 1-1.256 0V7.814c0-.347.281-.628.628-.628M12 16.186a.837.837 0 1 0 0-1.674.837.837 0 0 0 0 1.674"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-7.744a7.744 7.744 0 1 0 0 15.488 7.744 7.744 0 0 0 0-15.488"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default DangerOutlineIcon;
