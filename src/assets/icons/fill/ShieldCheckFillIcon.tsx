import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ShieldCheckFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M4.336 5.774C4 6.258 4 7.697 4 10.575v1.417c0 5.075 3.768 7.537 6.132 8.583.641.283.962.425 1.868.425s1.227-.142 1.868-.425C16.232 19.529 20 17.067 20 11.992v-1.417c0-2.878 0-4.317-.336-4.8-.335-.485-1.671-.948-4.344-1.874l-.51-.177C13.419 3.241 12.722 3 12 3s-1.418.241-2.81.724l-.51.177c-2.673.926-4.009 1.39-4.344 1.873m10.383 4.876a.68.68 0 0 0-.053-.954.66.66 0 0 0-.941.054l-2.677 3.037-.773-.877a.66.66 0 0 0-.941-.053.68.68 0 0 0-.054.953l1.27 1.44a.663.663 0 0 0 .995 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ShieldCheckFillIcon;
