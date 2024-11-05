import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ChatFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="m12.978 20.449.488-.824c.378-.64.568-.96.872-1.136.303-.177.686-.183 1.451-.197 1.13-.02 1.839-.088 2.433-.335a4.5 4.5 0 0 0 2.435-2.435C21 14.695 21 13.647 21 11.55v-.9c0-2.946 0-4.42-.663-5.501a4.5 4.5 0 0 0-1.486-1.486C17.77 3 16.296 3 13.35 3h-2.7c-2.946 0-4.42 0-5.501.663A4.5 4.5 0 0 0 3.663 5.15C3 6.23 3 7.704 3 10.65v.9c0 2.097 0 3.145.343 3.972a4.5 4.5 0 0 0 2.435 2.435c.594.247 1.303.316 2.433.335.765.014 1.148.02 1.452.197.303.177.493.496.871 1.136l.488.824c.435.735 1.521.735 1.956 0M15.6 12a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8m-2.7-.9a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0m-4.5.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ChatFillIcon;
