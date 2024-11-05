import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const GalleryFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M17.023 8.651a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.35 0"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M11.952 3h.096c1.933 0 3.447 0 4.629.159 1.21.162 2.164.502 2.913 1.251.75.75 1.088 1.704 1.251 2.913C21 8.505 21 10.02 21 11.952v.074c0 1.598 0 2.906-.087 3.971-.087 1.07-.266 1.965-.666 2.708a3.8 3.8 0 0 1-.657.885c-.75.75-1.704 1.088-2.913 1.251C15.495 21 13.98 21 12.048 21h-.096c-1.933 0-3.447 0-4.629-.159-1.21-.163-2.164-.502-2.913-1.251-.664-.664-1.007-1.49-1.19-2.516-.179-1.008-.211-2.26-.218-3.817Q3 12.663 3 12.001v-.049c0-1.933 0-3.447.159-4.629.162-1.21.502-2.164 1.251-2.913.75-.75 1.704-1.089 2.913-1.251C8.505 3 10.02 3 11.952 3M7.49 4.403c-1.07.144-1.715.418-2.192.895s-.75 1.122-.895 2.192C4.257 8.58 4.256 10.01 4.256 12v.706l.838-.733a1.925 1.925 0 0 1 2.63.087l3.591 3.592a1.674 1.674 0 0 0 2.147.186l.25-.176a2.51 2.51 0 0 1 3.124.188l2.37 2.133c.238-.501.38-1.16.456-2.088.082-1.008.082-2.266.082-3.895 0-1.991-.001-3.421-.148-4.51-.143-1.07-.417-1.715-.894-2.192s-1.122-.75-2.192-.895c-1.089-.146-2.519-.147-4.51-.147s-3.421.001-4.51.147"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default GalleryFillIcon;
