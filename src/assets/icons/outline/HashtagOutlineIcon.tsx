import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const HashtagOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M10.93 4.78a.614.614 0 0 0-.436-.757.63.63 0 0 0-.773.428L8.453 8.923h-3.15a.62.62 0 0 0-.629.616c0 .34.282.615.628.615h2.802l-1.279 4.513H3.628a.62.62 0 0 0-.628.615c0 .34.281.615.628.615h2.848l-.941 3.323a.614.614 0 0 0 .436.757.63.63 0 0 0 .774-.428l1.035-3.652h6.231l-.942 3.323a.614.614 0 0 0 .437.757.63.63 0 0 0 .773-.428l1.036-3.652h3.383a.62.62 0 0 0 .628-.615.62.62 0 0 0-.628-.615h-3.035l1.28-4.513h3.43A.62.62 0 0 0 21 9.539a.62.62 0 0 0-.628-.616h-3.08l1.173-4.143a.614.614 0 0 0-.436-.757.63.63 0 0 0-.773.428l-1.268 4.472H9.756zm3.43 9.887 1.279-4.513H9.408l-1.28 4.513z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default HashtagOutlineIcon;
