import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const MapPointOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M5 10.446C5 6.343 8.124 3 12 3s7 3.344 7 7.445c0 1.98-.54 4.107-1.492 5.944-.953 1.834-2.343 3.428-4.084 4.28a3.23 3.23 0 0 1-2.848 0c-1.74-.852-3.132-2.446-4.084-4.28C5.54 14.552 5 12.426 5 10.446m7-6.19c-3.193 0-5.8 2.76-5.8 6.19 0 1.755.482 3.677 1.347 5.343.866 1.669 2.09 3.034 3.537 3.742.582.284 1.25.284 1.832 0 1.447-.708 2.671-2.073 3.537-3.742.865-1.666 1.347-3.588 1.347-5.344 0-3.429-2.607-6.19-5.8-6.19m0 4.186c-.994 0-1.8.843-1.8 1.884s.806 1.883 1.8 1.883 1.8-.843 1.8-1.883-.806-1.884-1.8-1.884m-3 1.884c0-1.734 1.343-3.14 3-3.14s3 1.406 3 3.14c0 1.733-1.343 3.14-3 3.14s-3-1.406-3-3.14"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default MapPointOutlineIcon;
