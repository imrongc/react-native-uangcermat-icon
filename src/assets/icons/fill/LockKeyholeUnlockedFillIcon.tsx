import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const LockKeyholeUnlockedFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M7.275 8.855C7.275 6.34 9.39 4.301 12 4.301c2.2 0 4.052 1.451 4.576 3.415.093.348.461.558.822.468a.65.65 0 0 0 .486-.792C17.209 4.867 14.832 3 12 3 8.645 3 5.925 5.622 5.925 8.855v1.783c-1.003.072-1.657.254-2.134.715C3 12.115 3 13.342 3 15.795s0 3.68.79 4.443C4.583 21 5.855 21 8.4 21h7.2c2.546 0 3.818 0 4.61-.762.79-.762.79-1.99.79-4.443s0-3.68-.79-4.442c-.792-.763-2.064-.763-4.61-.763H8.4q-.608-.001-1.125.004zm6.525 6.94c0 .958-.806 1.735-1.8 1.735s-1.8-.777-1.8-1.735.806-1.735 1.8-1.735 1.8.777 1.8 1.735"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default LockKeyholeUnlockedFillIcon;
