import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ClipboardTimeFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M4.781 5.59c.506-.513 1.212-.693 2.33-.757v.417c0 1.491 1.194 2.7 2.667 2.7h4.444c1.473 0 2.667-1.209 2.667-2.7v-.417c1.118.064 1.824.244 2.33.756C20 6.38 20 7.653 20 10.2v4.264A4.625 4.625 0 1 0 13.463 21h-4.13c-2.514 0-3.77 0-4.552-.79C4 19.417 4 18.144 4 15.6v-5.4c0-2.547 0-3.82.781-4.61"
      />
      <Path
        fill={fill}
        d="M16.04 16.509a.584.584 0 1 1 1.17 0v.874l.526.527a.584.584 0 1 1-.826.826l-.698-.698a.59.59 0 0 1-.171-.413z"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M13.25 17.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0m3.375-2.206a2.206 2.206 0 1 0 0 4.412 2.206 2.206 0 0 0 0-4.412"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ClipboardTimeFillIcon;
