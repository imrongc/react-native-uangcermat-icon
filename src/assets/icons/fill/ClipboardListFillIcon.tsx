import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ClipboardListFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M9.778 3c-.737 0-1.334.604-1.334 1.35v.9c0 .746.597 1.35 1.334 1.35h4.444c.737 0 1.334-.604 1.334-1.35v-.9c0-.746-.597-1.35-1.334-1.35z"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M7.111 4.833c-1.118.064-1.824.244-2.33.756C4 6.38 4 7.653 4 10.2v5.4c0 2.546 0 3.82.781 4.61S6.819 21 9.333 21h5.334c2.514 0 3.77 0 4.552-.79.781-.792.781-2.065.781-4.61v-5.4c0-2.547 0-3.82-.781-4.61-.506-.513-1.212-.693-2.33-.757v.417c0 1.491-1.194 2.7-2.667 2.7H9.778c-1.473 0-2.667-1.209-2.667-2.7zm.445 5.143a.67.67 0 0 0-.667.675.67.67 0 0 0 .667.675H8a.67.67 0 0 0 .667-.675A.67.67 0 0 0 8 9.976zm3.11 0a.67.67 0 0 0-.666.675.67.67 0 0 0 .667.675h5.777a.67.67 0 0 0 .667-.675.67.67 0 0 0-.667-.675zm-3.11 3.15a.67.67 0 0 0-.667.675.67.67 0 0 0 .667.675H8a.67.67 0 0 0 .667-.675.67.67 0 0 0-.667-.675zm3.11 0A.67.67 0 0 0 10 13.8a.67.67 0 0 0 .667.675h5.777a.67.67 0 0 0 .667-.675.67.67 0 0 0-.667-.675zm-3.11 3.15a.67.67 0 0 0-.667.675c0 .373.298.675.667.675H8a.67.67 0 0 0 .667-.675.67.67 0 0 0-.667-.675zm3.11 0a.67.67 0 0 0-.666.675c0 .373.299.675.667.675h5.777a.67.67 0 0 0 .667-.675.67.67 0 0 0-.667-.675z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ClipboardListFillIcon;