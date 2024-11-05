import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const GalleryOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M15.349 7.605a1.047 1.047 0 1 0 0 2.093 1.047 1.047 0 0 0 0-2.093M13.047 8.65a2.302 2.302 0 1 1 4.604 0 2.302 2.302 0 0 1-4.604 0"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M11.952 3h.096c1.933 0 3.447 0 4.629.159 1.21.162 2.164.502 2.913 1.251.75.75 1.088 1.704 1.251 2.913C21 8.505 21 10.02 21 11.952v.096c0 1.933 0 3.447-.159 4.629-.163 1.21-.502 2.164-1.251 2.913-.75.75-1.704 1.088-2.913 1.251C15.495 21 13.98 21 12.048 21h-.096c-1.933 0-3.447 0-4.629-.159-1.21-.163-2.164-.502-2.913-1.251-.75-.75-1.089-1.704-1.251-2.913C3 15.495 3 13.98 3 12.048v-.096c0-1.933 0-3.447.159-4.629.162-1.21.502-2.164 1.251-2.913.75-.75 1.704-1.089 2.913-1.251C8.505 3 10.02 3 11.952 3M5.298 18.702c-.477-.477-.75-1.122-.895-2.192-.128-.956-.145-2.175-.147-3.807l1.252-1.095a1.3 1.3 0 0 1 1.772.06l3.591 3.59a2.3 2.3 0 0 0 2.952.256l.25-.175a1.884 1.884 0 0 1 2.343.14l2.699 2.43q.044.04.093.07c-.135.285-.302.52-.506.723-.477.477-1.122.75-2.192.894-1.089.147-2.519.148-4.51.148s-3.421-.001-4.51-.148c-1.07-.143-1.715-.417-2.192-.894M7.49 4.403c-1.07.144-1.715.418-2.192.895s-.75 1.122-.895 2.192c-.121.904-.143 2.044-.146 3.544l.424-.371a2.553 2.553 0 0 1 3.487.116l3.591 3.592c.36.36.926.408 1.342.116l.25-.176a3.14 3.14 0 0 1 3.905.235l2.323 2.09.017-.126c.147-1.089.148-2.519.148-4.51s-.001-3.421-.148-4.51c-.143-1.07-.417-1.715-.894-2.192s-1.122-.75-2.192-.895c-1.089-.146-2.519-.147-4.51-.147s-3.421.001-4.51.147"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default GalleryOutlineIcon;
