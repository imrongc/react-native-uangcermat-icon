import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const HamburgerMenuOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M21 6.783a.777.777 0 0 1-.771.782H3.77A.777.777 0 0 1 3 6.783C3 6.35 3.345 6 3.771 6H20.23c.426 0 .771.35.771.783M21 12a.777.777 0 0 1-.771.783H3.77A.777.777 0 0 1 3 12c0-.432.345-.783.771-.783H20.23c.426 0 .771.35.771.783M20.229 18c.426 0 .771-.35.771-.783a.777.777 0 0 0-.771-.782H3.77a.777.777 0 0 0-.771.782c0 .433.345.783.771.783z"
      />
    </Svg>
  );
};

export default HamburgerMenuOutlineIcon;
