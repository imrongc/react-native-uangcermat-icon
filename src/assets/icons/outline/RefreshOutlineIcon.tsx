import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const RefreshOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M3.564 11.262C3.63 6.682 7.42 3 12.074 3a8.53 8.53 0 0 1 7.269 4.022.69.69 0 0 1-.23.952.7.7 0 0 1-.959-.227 7.14 7.14 0 0 0-6.08-3.362c-3.893 0-7.047 3.071-7.115 6.875l.373-.367a.7.7 0 0 1 .986.004c.272.271.27.71-.004.98l-1.562 1.537a.7.7 0 0 1-.983 0l-1.563-1.538a.69.69 0 0 1-.004-.979.7.7 0 0 1 .987-.004zm15.68-.678a.7.7 0 0 1 .98 0l1.569 1.539a.69.69 0 0 1 .006.98.7.7 0 0 1-.987.005l-.381-.374C20.366 17.317 16.56 21 11.89 21a8.57 8.57 0 0 1-7.295-4.021.69.69 0 0 1 .228-.953.7.7 0 0 1 .96.226 7.17 7.17 0 0 0 6.107 3.363c3.912 0 7.079-3.076 7.144-6.88l-.38.373a.7.7 0 0 1-.986-.006.69.69 0 0 1 .006-.979z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default RefreshOutlineIcon;
