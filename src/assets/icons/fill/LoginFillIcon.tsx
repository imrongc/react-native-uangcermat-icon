import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const LoginFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M3.5 9.568v4.864c0 2.294 0 3.44.68 4.153.616.647 1.575.706 3.384.712l-.014-.105c-.108-.844-.108-1.916-.108-3.247v-.053c0-.403.311-.73.696-.73s.695.327.695.73c0 1.396.002 2.37.096 3.105.092.714.259 1.093.516 1.362.256.27.617.445 1.297.54.7.1 1.63.101 2.96.101h.928c1.332 0 2.26-.002 2.961-.1.68-.096 1.041-.272 1.298-.541.256-.27.424-.648.515-1.362.095-.734.096-1.709.096-3.105V8.108c0-1.397-.002-2.37-.096-3.105-.091-.714-.259-1.093-.515-1.362-.257-.27-.617-.445-1.298-.54-.7-.1-1.63-.101-2.96-.101h-.928c-1.332 0-2.26.002-2.96.1-.681.096-1.042.272-1.298.541-.257.27-.424.648-.516 1.362-.094.734-.096 1.708-.096 3.105 0 .403-.311.73-.695.73-.385 0-.696-.327-.696-.73v-.053c0-1.33 0-2.403.108-3.247l.014-.105c-1.81.006-2.768.065-3.385.712-.679.713-.679 1.86-.679 4.153m9.304 5.38 2.318-2.432a.755.755 0 0 0 0-1.032l-2.318-2.432a.673.673 0 0 0-.984 0 .755.755 0 0 0 0 1.032l1.131 1.186H6.283c-.385 0-.696.327-.696.73s.311.73.696.73h6.668l-1.131 1.186a.755.755 0 0 0 0 1.032.673.673 0 0 0 .983 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default LoginFillIcon;
