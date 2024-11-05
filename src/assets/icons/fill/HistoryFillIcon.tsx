import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const HistoryFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M5.611 5.602c3.503-3.498 9.199-3.461 12.723.064 3.527 3.526 3.562 9.224.06 12.727-3.504 3.503-9.202 3.468-12.728-.059a9.06 9.06 0 0 1-2.582-7.644.692.692 0 1 1 1.371.188 7.67 7.67 0 0 0 2.19 6.477c2.995 2.995 7.816 3.012 10.77.06 2.952-2.954 2.935-7.775-.06-10.77C14.362 3.65 9.544 3.633 6.59 6.58l.69.004a.692.692 0 1 1-.007 1.384l-2.35-.012a.69.69 0 0 1-.688-.688l-.012-2.35a.692.692 0 1 1 1.385-.007zM12 7.615c.382 0 .692.31.692.693v3.405l2.105 2.105a.692.692 0 1 1-.979.98l-2.51-2.511v-3.98c0-.382.31-.692.692-.692"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default HistoryFillIcon;
