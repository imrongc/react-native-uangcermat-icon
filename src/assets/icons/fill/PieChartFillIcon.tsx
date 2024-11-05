import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const PieChartFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M16.719 3.133a7.37 7.37 0 0 1 4.148 4.148c.558 1.417-.725 2.693-2.248 2.693h-3.675a.92.92 0 0 1-.918-.918V5.38c0-1.522 1.276-2.805 2.693-2.247"
      />
      <Path
        fill={fill}
        d="M8.161 4.305A8.728 8.728 0 1 0 19.695 15.84c.564-1.26.846-1.89.303-2.73-.543-.838-1.434-.838-3.216-.838h-1.378c-1.733 0-2.599 0-3.137-.538s-.538-1.404-.538-3.137V7.218c0-1.782 0-2.673-.839-3.216-.838-.543-1.469-.261-2.729.303"
      />
    </Svg>
  );
};

export default PieChartFillIcon;
