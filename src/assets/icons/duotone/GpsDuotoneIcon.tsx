import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const GpsDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
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
        d="M3 12C3 12.3468 3.28112 12.6279 3.62791 12.6279H5.33137C5.6287 15.8258 8.17422 18.3713 11.3721 18.6686V20.3721C11.3721 20.7189 11.6532 21 12 21C12.3468 21 12.6279 20.7189 12.6279 20.3721V18.6686C15.8258 18.3713 18.3713 15.8258 18.6686 12.6279H20.3721C20.7189 12.6279 21 12.3468 21 12C21 11.6532 20.7189 11.3721 20.3721 11.3721H18.6686C18.3713 8.17422 15.8258 5.6287 12.6279 5.33137V3.62791C12.6279 3.28112 12.3468 3 12 3C11.6532 3 11.3721 3.28112 11.3721 3.62791V5.33137C8.17422 5.6287 5.6287 8.17422 5.33137 11.3721H3.62791C3.28112 11.3721 3 11.6532 3 12ZM8.86047 12C8.86047 10.2661 10.2661 8.86047 12 8.86047C13.7339 8.86047 15.1395 10.2661 15.1395 12C15.1395 13.7339 13.7339 15.1395 12 15.1395C10.2661 15.1395 8.86047 13.7339 8.86047 12Z"
        fill={fill}
      />
      <Path
        d="M10.1163 12C10.1163 10.9596 10.9596 10.1163 12 10.1163C13.0403 10.1163 13.8837 10.9596 13.8837 12C13.8837 13.0403 13.0403 13.8837 12 13.8837C10.9596 13.8837 10.1163 13.0403 10.1163 12Z"
        fill={fill}
      />
      <Path
        d="M18.6977 11.9999C18.6977 15.6989 15.6991 18.6976 12 18.6976C8.30102 18.6976 5.30237 15.6989 5.30237 11.9999C5.30237 8.3009 8.30102 5.30225 12 5.30225C15.6991 5.30225 18.6977 8.3009 18.6977 11.9999Z"
        fill={secondary}
      />
      <Path
        d="M12 3C12.3468 3 12.6279 3.28112 12.6279 3.62791V5.33137C12.4212 5.31215 12.2117 5.30233 12 5.30233C11.7883 5.30233 11.5788 5.31215 11.3721 5.33137V3.62791C11.3721 3.28112 11.6532 3 12 3Z"
        fill={fill}
      />
      <Path
        d="M18.6977 12C18.6977 12.2117 18.6878 12.4212 18.6686 12.6279H20.3721C20.7189 12.6279 21 12.3468 21 12C21 11.6532 20.7189 11.3721 20.3721 11.3721H18.6686C18.6878 11.5788 18.6977 11.7883 18.6977 12Z"
        fill={fill}
      />
      <Path
        d="M11.3721 18.6686C11.5788 18.6878 11.7883 18.6977 12 18.6977C12.2117 18.6977 12.4212 18.6878 12.6279 18.6686V20.3721C12.6279 20.7189 12.3468 21 12 21C11.6532 21 11.3721 20.7189 11.3721 20.3721V18.6686Z"
        fill={fill}
      />
      <Path
        d="M5.30233 12C5.30233 11.7883 5.31215 11.5788 5.33137 11.3721H3.62791C3.28112 11.3721 3 11.6532 3 12C3 12.3468 3.28112 12.6279 3.62791 12.6279H5.33137C5.31215 12.4212 5.30233 12.2117 5.30233 12Z"
        fill={fill}
      />
      <Path
        d="M9.07959 12.0001C9.07959 10.3871 10.3871 9.07959 12.0001 9.07959C13.613 9.07959 14.9206 10.3871 14.9206 12.0001C14.9206 13.613 13.613 14.9206 12.0001 14.9206C10.3871 14.9206 9.07959 13.613 9.07959 12.0001Z"
        fill={fill}
      />
    </Svg>
  );
};

export default GpsDuotoneIcon;
