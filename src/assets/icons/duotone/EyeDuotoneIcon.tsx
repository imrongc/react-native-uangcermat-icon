import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const EyeDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 13.4345 3.38247 13.9175 4.1474 14.8837C5.67477 16.8129 8.2363 19 12 19C15.7637 19 18.3252 16.8129 19.8526 14.8837C20.6175 13.9175 21 13.4345 21 12C21 10.5655 20.6175 10.0825 19.8526 9.11629C18.3252 7.18711 15.7637 5 12 5C8.2363 5 5.67477 7.18711 4.1474 9.11629C4.1474 9.11629 3 10.5655 3 12Z"
        fill={secondary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.625 12C8.625 10.1878 10.136 8.71875 12 8.71875C13.864 8.71875 15.375 10.1878 15.375 12C15.375 13.8122 13.864 15.2812 12 15.2812C10.136 15.2812 8.625 13.8122 8.625 12ZM12 10.0312C10.8816 10.0312 9.975 10.9127 9.975 12C9.975 13.0873 10.8816 13.9688 12 13.9688C13.1184 13.9688 14.025 13.0873 14.025 12C14.025 10.9127 13.1184 10.0312 12 10.0312Z"
        fill={fill}
      />
    </Svg>
  );
};

export default EyeDuotoneIcon;
