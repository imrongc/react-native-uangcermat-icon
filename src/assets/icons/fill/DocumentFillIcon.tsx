import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const DocumentFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M4.041 4.054C3 5.11 3 6.806 3 10.2v3.6c0 3.394 0 5.091 1.041 6.146C5.083 21 6.76 21 10.111 21h1.778c3.352 0 5.028 0 6.07-1.054C19 18.89 19 17.194 19 13.8v-3.6c0-3.394 0-5.091-1.041-6.146C16.917 3 15.24 3 11.889 3H10.11C6.76 3 5.083 3 4.041 4.054M6.778 8.4a.67.67 0 0 1 .666-.675h7.112a.67.67 0 0 1 .666.675.67.67 0 0 1-.666.675H7.444a.67.67 0 0 1-.666-.675m0 3.6a.67.67 0 0 1 .666-.675h7.112a.67.67 0 0 1 .666.675.67.67 0 0 1-.666.675H7.444A.67.67 0 0 1 6.778 12m.666 2.925a.67.67 0 0 0-.666.675.67.67 0 0 0 .666.675h4.445a.67.67 0 0 0 .667-.675.67.67 0 0 0-.667-.675z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default DocumentFillIcon;
