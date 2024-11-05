import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const PhoneFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="m15.556 14.406-.455.453s-1.083 1.076-4.038-1.862-1.872-4.014-1.872-4.014l.287-.286c.706-.702.773-1.83.156-2.654L8.374 4.36C7.61 3.34 6.135 3.205 5.26 4.075l-1.57 1.56c-.433.432-.723.99-.688 1.61.09 1.587.808 5 4.812 8.982 4.247 4.222 8.232 4.39 9.861 4.238.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"
      />
    </Svg>
  );
};

export default PhoneFillIcon;
