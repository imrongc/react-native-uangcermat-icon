import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ClipboardWarningFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M4.781 5.59c.506-.513 1.212-.693 2.33-.757v.417c0 1.491 1.194 2.7 2.667 2.7h4.444c1.473 0 2.667-1.209 2.667-2.7v-.417c1.118.064 1.824.244 2.33.756C20 6.38 20 7.653 20 10.2v5.4c0 2.546 0 3.82-.781 4.61S17.181 21 14.667 21H9.333c-2.514 0-3.77 0-4.552-.79C4 19.417 4 18.144 4 15.6v-5.4c0-2.547 0-3.82.781-4.61m7.969 5.66a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0zM12 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ClipboardWarningFillIcon;
