import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const LockKeyholeFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M5.925 10.638V8.855C5.925 5.622 8.645 3 12 3s6.075 2.622 6.075 5.855v1.783c1.003.072 1.657.254 2.134.715.791.762.791 1.989.791 4.442s0 3.68-.79 4.443C19.417 21 18.145 21 15.6 21H8.4c-2.546 0-3.818 0-4.61-.762C3 19.476 3 18.248 3 15.795s0-3.68.79-4.442c.478-.46 1.132-.643 2.135-.715m1.35-1.783C7.275 6.34 9.39 4.301 12 4.301s4.725 2.04 4.725 4.554v1.739q-.517-.005-1.125-.004H8.4q-.608-.001-1.125.004zm6.525 6.94c0 .958-.806 1.735-1.8 1.735s-1.8-.777-1.8-1.735.806-1.735 1.8-1.735 1.8.777 1.8 1.735"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default LockKeyholeFillIcon;
