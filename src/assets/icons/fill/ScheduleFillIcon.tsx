import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ScheduleFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M8.175 3.667A.67.67 0 0 0 7.5 3a.67.67 0 0 0-.675.667V5.07c-1.296.103-2.146.354-2.77.971s-.88 1.457-.984 2.737h17.857c-.104-1.28-.358-2.12-.983-2.737s-1.475-.868-2.77-.97V3.666A.67.67 0 0 0 16.5 3a.67.67 0 0 0-.675.667V5.01C15.225 5 14.555 5 13.8 5h-3.6c-.755 0-1.426 0-2.025.011zM21 12.111v2.311a4.74 4.74 0 0 0-3.6-1.644c-2.61 0-4.725 2.09-4.725 4.666 0 1.425.646 2.7 1.664 3.556h-4.140000000000001c-3.393 0-5.09 0-6.145-1.041C3 18.917 3 17.24 3 13.889V12.11c0-.746 0-1.408.012-2h17.976c.011.591.011 1.254.011 2"
      />
      <Path
        fill={fill}
        d="M17.499 15.729a.606.606 0 0 0-.607.606v1.158c0 .16.064.314.178.428l.724.724a.606.606 0 0 0 .857-.857l-.546-.546v-.907a.606.606 0 0 0-.606-.606"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M17.499 13.993a3.5 3.5 0 1 0-.002 7.001 3.5 3.5 0 0 0 .002-7.001m-2.29 3.5a2.289 2.289 0 1 1 4.578 0 2.289 2.289 0 0 1-4.577 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ScheduleFillIcon;
