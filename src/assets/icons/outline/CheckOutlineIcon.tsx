import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const CheckOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M18.885 8.849c.42-.423.42-1.109 0-1.532a1.07 1.07 0 0 0-1.523 0L9.947 14.77l-3.11-3.121a1.07 1.07 0 0 0-1.522 0 1.087 1.087 0 0 0 0 1.53l3.87 3.888c.421.423 1.103.423 1.523 0z"
      />
    </Svg>
  );
};

export default CheckOutlineIcon;
