import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const HomeFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M3.467 8.24C3 9.094 3 10.124 3 12.184v1.369c0 3.51 0 5.266 1.054 6.356C5.11 21 6.806 21 10.2 21h3.6c3.394 0 5.091 0 6.146-1.09S21 17.062 21 13.552v-1.37c0-2.06 0-3.089-.467-3.943-.468-.853-1.321-1.383-3.029-2.443l-1.8-1.117C13.9 3.56 12.997 3 12 3s-1.9.56-3.704 1.68l-1.8 1.117c-1.708 1.06-2.561 1.59-3.029 2.443M9.3 16.725a.675.675 0 1 0 0 1.35h5.4a.675.675 0 1 0 0-1.35z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default HomeFillIcon;
