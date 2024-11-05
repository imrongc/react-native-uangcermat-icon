import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ClipboardCheckFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M7.111 4.833c-1.118.064-1.824.244-2.33.756C4 6.38 4 7.653 4 10.2v5.4c0 2.546 0 3.82.781 4.61S6.819 21 9.333 21h5.334c2.514 0 3.77 0 4.552-.79.781-.792.781-2.065.781-4.61v-5.4c0-2.547 0-3.82-.781-4.61-.506-.513-1.212-.693-2.33-.757v.417c0 1.491-1.194 2.7-2.667 2.7H9.778c-1.473 0-2.667-1.209-2.667-2.7zm8.01 7.661a.68.68 0 0 0 .033-.954.66.66 0 0 0-.942-.033l-3.355 3.17-1.069-1.01a.66.66 0 0 0-.942.033.68.68 0 0 0 .032.955l1.524 1.44a.66.66 0 0 0 .91 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ClipboardCheckFillIcon;
