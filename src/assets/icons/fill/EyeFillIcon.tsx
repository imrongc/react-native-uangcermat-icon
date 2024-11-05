import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const EyeFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M9.975 12c0-1.087.907-1.969 2.025-1.969s2.025.882 2.025 1.969-.907 1.969-2.025 1.969S9.975 13.087 9.975 12"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M3 12c0 1.435.382 1.918 1.147 2.884C5.675 16.813 8.237 19 12 19s6.325-2.187 7.853-4.116C20.617 13.918 21 13.434 21 12s-.383-1.918-1.147-2.884C18.325 7.187 15.763 5 12 5S5.675 7.187 4.147 9.116C3.382 10.082 3 10.566 3 12m9-3.281c-1.864 0-3.375 1.469-3.375 3.281s1.511 3.281 3.375 3.281 3.375-1.469 3.375-3.281S13.864 8.719 12 8.719"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default EyeFillIcon;
