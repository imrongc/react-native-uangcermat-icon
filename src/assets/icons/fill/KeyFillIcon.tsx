import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const KeyFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M18.977 14.79a6.907 6.907 0 1 0-11.573-3.159c.095.369.01.768-.258 1.037L3.433 16.38a1.48 1.48 0 0 0-.424 1.21l.232 2.089c.025.223.125.43.283.589l.208.208a1 1 0 0 0 .589.283l2.089.232a1.48 1.48 0 0 0 1.21-.424l.71-.71-1.747-1.728a.75.75 0 1 1 1.055-1.066l1.752 1.733 1.942-1.942c.27-.27.668-.353 1.037-.258a6.9 6.9 0 0 0 6.608-1.806m-6.391-6.204a2 2 0 1 1 2.828 2.828 2 2 0 0 1-2.828-2.828"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default KeyFillIcon;
