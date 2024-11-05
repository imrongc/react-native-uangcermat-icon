import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const EmailFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M4.054 6.025C3 7.05 3 8.7 3 12s0 4.95 1.054 5.975S6.806 19 10.2 19h3.6c3.394 0 5.091 0 6.146-1.025S21 15.3 21 12s0-4.95-1.054-5.975S17.194 5 13.8 5h-3.6C6.806 5 5.109 5 4.054 6.025M17.92 8.08c.238.278.2.692-.087.924l-1.977 1.602c-.797.646-1.444 1.17-2.015 1.527-.594.372-1.173.606-1.84.606s-1.246-.235-1.84-.606c-.571-.357-1.218-.88-2.015-1.527L6.168 9.004a.644.644 0 0 1-.087-.924.69.69 0 0 1 .951-.084L8.975 9.57c.84.68 1.423 1.151 1.915 1.459.476.298.8.398 1.11.398s.634-.1 1.11-.398c.492-.308 1.075-.779 1.915-1.459l1.943-1.574a.69.69 0 0 1 .95.084"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default EmailFillIcon;
