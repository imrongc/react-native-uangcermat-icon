import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const EmailOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M10.278 5h3.444c1.538 0 2.757 0 3.71.123.982.126 1.777.391 2.403.99s.905 1.358 1.037 2.296C21 9.32 21 10.485 21 11.955v.09c0 1.47 0 2.635-.128 3.546-.132.938-.41 1.697-1.037 2.296-.626.599-1.42.864-2.402.99-.954.123-2.173.123-3.711.123h-3.444c-1.538 0-2.757 0-3.71-.122-.982-.127-1.777-.392-2.403-.991s-.905-1.358-1.037-2.296C3 14.68 3 13.515 3 12.045v-.09c0-1.47 0-2.635.128-3.546.132-.938.41-1.697 1.037-2.296.626-.599 1.42-.864 2.402-.99C7.521 5 8.74 5 10.278 5M6.735 6.312c-.843.108-1.328.311-1.682.65-.355.338-.567.802-.68 1.607-.116.822-.117 1.906-.117 3.431s.001 2.61.117 3.431c.113.805.325 1.269.68 1.608.354.338.84.541 1.682.65.86.11 1.994.111 3.59.111h3.35c1.596 0 2.73-.001 3.59-.112.843-.108 1.328-.311 1.682-.65.355-.338.567-.802.68-1.607.116-.822.117-1.905.117-3.431 0-1.525-.001-2.61-.117-3.431-.113-.805-.325-1.269-.68-1.607-.354-.339-.84-.542-1.682-.65-.86-.11-1.994-.112-3.59-.112h-3.35c-1.596 0-2.73.001-3.59.112m-.24 2.104a.65.65 0 0 1 .884-.077l1.807 1.44c.781.621 1.323 1.052 1.781 1.333.444.272.744.364 1.033.364s.59-.092 1.033-.364c.458-.281 1-.712 1.78-1.334l1.808-1.439a.65.65 0 0 1 .885.077.58.58 0 0 1-.08.845l-1.84 1.464c-.742.591-1.343 1.07-1.874 1.396-.553.34-1.092.555-1.712.555s-1.159-.215-1.712-.555c-.53-.326-1.132-.805-1.874-1.396l-1.84-1.464a.58.58 0 0 1-.08-.845"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default EmailOutlineIcon;
