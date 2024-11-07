import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const WidgetFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M3.593 3.593C3 4.186 3 5.141 3 7.05c0 1.91 0 2.864.593 3.457s1.548.593 3.457.593c1.91 0 2.864 0 3.457-.593s.593-1.548.593-3.457c0-1.91 0-2.864-.593-3.457S8.959 3 7.05 3c-1.91 0-2.864 0-3.457.593M13.493 13.493c-.593.593-.593 1.548-.593 3.457 0 1.91 0 2.864.593 3.457S15.041 21 16.95 21c1.91 0 2.864 0 3.457-.593S21 18.859 21 16.95c0-1.91 0-2.864-.593-3.457s-1.548-.593-3.457-.593c-1.91 0-2.864 0-3.457.593M3 16.95c0-1.91 0-2.864.593-3.457S5.141 12.9 7.05 12.9c1.91 0 2.864 0 3.457.593s.593 1.548.593 3.457c0 1.91 0 2.864-.593 3.457S8.959 21 7.05 21c-1.91 0-2.864 0-3.457-.593S3 18.859 3 16.95M13.493 3.593c-.593.593-.593 1.548-.593 3.457 0 1.91 0 2.864.593 3.457s1.548.593 3.457.593c1.91 0 2.864 0 3.457-.593S21 8.959 21 7.05c0-1.91 0-2.864-.593-3.457S18.859 3 16.95 3c-1.91 0-2.864 0-3.457.593"
      />
    </Svg>
  );
};

export default WidgetFillIcon;