import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ShopFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M18.698 18.843h1.674c.347 0 .628.26.628.579 0 .32-.281.578-.628.578H3.628C3.28 20 3 19.741 3 19.422c0-.32.281-.579.628-.579h1.674v-6.747c.623 0 1.2-.178 1.675-.483a3.1 3.1 0 0 0 1.674.483c.623 0 1.2-.178 1.675-.483a3.1 3.1 0 0 0 1.674.483c.623 0 1.2-.178 1.674-.483a3.1 3.1 0 0 0 1.675.483c.622 0 1.2-.178 1.674-.483a3.1 3.1 0 0 0 1.675.483zm-8.791 0h4.186v-2.12c0-.72 0-1.081-.168-1.35a1.2 1.2 0 0 0-.46-.423c-.291-.155-.682-.155-1.465-.155s-1.174 0-1.465.155a1.2 1.2 0 0 0-.46.424c-.168.268-.168.628-.168 1.349z"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        d="M15.79 4H8.21c-1.008 0-1.511 0-1.916.23-.404.23-.63.645-1.08 1.475L4.039 8.441c-.272.632-.51 1.377-.052 1.91.306.359.782.589 1.315.589.925 0 1.675-.69 1.675-1.542 0 .851.75 1.542 1.674 1.542.925 0 1.675-.69 1.675-1.542 0 .851.75 1.542 1.674 1.542.925 0 1.674-.69 1.674-1.542 0 .851.75 1.542 1.675 1.542s1.674-.69 1.674-1.542c0 .851.75 1.542 1.675 1.542.533 0 1.009-.23 1.315-.588.457-.534.22-1.279-.052-1.911l-1.175-2.736c-.45-.83-.675-1.244-1.08-1.475C17.3 4 16.798 4 15.79 4"
      />
    </Svg>
  );
};

export default ShopFillIcon;
