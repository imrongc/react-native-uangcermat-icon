import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const FilterFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M18.3 4H5.7c-1.273 0-1.91 0-2.305.366C3 4.733 3 5.323 3 6.502v.613c0 .923 0 1.384.234 1.766.233.383.66.62 1.514 1.095l2.622 1.457c.572.319.859.478 1.064.654.427.366.69.796.809 1.324.057.253.057.55.057 1.143v2.373c0 .808 0 1.212.227 1.527.226.316.63.471 1.435.782 1.69.653 2.536.98 3.137.608s.601-1.22.601-2.917v-2.373c0-.593 0-.89.057-1.143.12-.528.382-.958.81-1.324.204-.176.49-.335 1.064-.654l2.621-1.457c.854-.475 1.28-.712 1.514-1.095C21 8.5 21 8.038 21 7.115v-.613c0-1.18 0-1.77-.395-2.136C20.209 4 19.573 4 18.3 4"
      />
    </Svg>
  );
};

export default FilterFillIcon;
