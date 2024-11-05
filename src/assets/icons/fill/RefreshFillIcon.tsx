import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const RefreshFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-14.885-.825a5.93 5.93 0 0 1 5.894-5.25c1.924 0 3.635.916 4.718 2.333a.675.675 0 0 1-1.073.82 4.58 4.58 0 0 0-3.645-1.803 4.58 4.58 0 0 0-4.533 3.9h.327a.675.675 0 0 1 .477 1.153l-1.052 1.05a.675.675 0 0 1-.954 0l-1.051-1.05a.675.675 0 0 1 .477-1.153zm11.61-.553a.675.675 0 0 0-.953 0l-1.052 1.05a.675.675 0 0 0 .477 1.153h.327a4.58 4.58 0 0 1-4.533 3.9c-1.48 0-2.795-.7-3.633-1.788a.675.675 0 0 0-1.07.825 5.93 5.93 0 0 0 4.703 2.313 5.93 5.93 0 0 0 5.895-5.25h.414a.675.675 0 0 0 .477-1.153z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default RefreshFillIcon;
