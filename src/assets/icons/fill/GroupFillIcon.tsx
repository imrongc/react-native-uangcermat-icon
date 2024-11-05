import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const GroupFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M13.42 6.79a3.79 3.79 0 1 1-7.578 0 3.79 3.79 0 0 1 7.579 0M16.263 17.21c0 2.093-2.97 3.79-6.632 3.79S3 19.303 3 17.21s2.969-3.789 6.631-3.789 6.631 1.697 6.631 3.79M15.314 9.632a2.842 2.842 0 1 0-.973-5.513c.447.788.703 1.7.703 2.67 0 .971-.256 1.883-.704 2.672.303.11.632.17.974.17M16.715 20.052c2.355 0 4.283-1.272 4.283-2.842s-1.93-2.842-4.285-2.842c.695.759 1.173 1.711 1.173 2.844 0 1.13-.477 2.082-1.17 2.84"
      />
    </Svg>
  );
};

export default GroupFillIcon;
