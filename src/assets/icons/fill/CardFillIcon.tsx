import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const CardFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M13.8 5h-3.6C6.806 5 5.109 5 4.054 6.025c-.759.738-.971 1.8-1.03 3.569h17.953c-.06-1.769-.272-2.83-1.031-3.569C18.89 5 17.194 5 13.8 5"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M10.2 19h3.6c3.394 0 5.091 0 6.146-1.025S21 15.3 21 12q0-.58-.002-1.094H3.002Q2.999 11.42 3 12c0 3.3 0 4.95 1.054 5.975S6.806 19 10.2 19m-3.6-4.156a.666.666 0 0 0-.675.656c0 .362.302.656.675.656h3.6a.666.666 0 0 0 .675-.656.666.666 0 0 0-.675-.656zm5.175.656c0-.362.302-.656.675-.656h1.35c.373 0 .675.294.675.656a.666.666 0 0 1-.675.656h-1.35a.666.666 0 0 1-.675-.656"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CardFillIcon;
