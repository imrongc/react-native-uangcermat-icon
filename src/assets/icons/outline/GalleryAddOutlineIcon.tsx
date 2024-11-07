import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const GalleryAddOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M17.442 3c.347 0 .628.281.628.628V5.93h2.302a.628.628 0 1 1 0 1.256H18.07v2.302a.628.628 0 0 1-1.256 0V7.186h-2.302a.628.628 0 1 1 0-1.256h2.302V3.628c0-.347.281-.628.628-.628"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M12 3h-.048c-1.933 0-3.447 0-4.629.159-1.21.162-2.164.502-2.913 1.251-.75.75-1.089 1.704-1.251 2.913C3 8.505 3 10.02 3 11.952v.096c0 1.933 0 3.447.159 4.629.162 1.21.502 2.164 1.251 2.913.75.75 1.704 1.088 2.913 1.251C8.505 21 10.02 21 11.952 21h.096c1.933 0 3.447 0 4.629-.159 1.21-.163 2.164-.502 2.913-1.251.75-.75 1.088-1.704 1.251-2.913C21 15.495 21 13.98 21 12.048V12a.628.628 0 1 0-1.256 0c0 1.991-.001 3.421-.148 4.51l-.017.126-2.323-2.09a3.14 3.14 0 0 0-3.905-.235l-.25.176a1.05 1.05 0 0 1-1.342-.117L8.168 10.78a2.553 2.553 0 0 0-3.487-.116l-.424.371c.003-1.5.025-2.64.146-3.544.144-1.07.418-1.715.895-2.192s1.122-.75 2.192-.895c1.089-.146 2.519-.147 4.51-.147A.628.628 0 1 0 12 3M4.403 16.51c.144 1.07.418 1.715.895 2.192s1.122.75 2.192.894c1.089.147 2.519.148 4.51.148s3.421-.001 4.51-.148c1.07-.143 1.715-.417 2.192-.894.204-.204.37-.439.506-.724a1 1 0 0 1-.093-.07l-2.699-2.428a1.884 1.884 0 0 0-2.343-.141l-.25.175a2.3 2.3 0 0 1-2.952-.256L7.28 11.667a1.3 1.3 0 0 0-1.772-.06l-1.252 1.096c.002 1.632.019 2.85.147 3.807"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default GalleryAddOutlineIcon;