import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const PenOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M14.308 4.148a3.92 3.92 0 1 1 5.544 5.544l-7.941 7.941c-.454.454-.721.721-1.018.953a6 6 0 0 1-1.13.698c-.34.162-.699.282-1.308.485l-2.788.93-.672.223a1.516 1.516 0 0 1-1.917-1.917l1.153-3.46c.203-.61.323-.967.485-1.308.19-.4.425-.78.698-1.13.232-.297.499-.564.953-1.018zm-8.67 15.236 2.379-.793c.662-.22.943-.316 1.205-.44a5 5 0 0 0 .898-.555c.23-.179.44-.388.934-.882l6.337-6.337a6.16 6.16 0 0 1-2.307-1.46 6.2 6.2 0 0 1-1.461-2.308l-6.337 6.337c-.494.494-.703.705-.882.934a5 5 0 0 0-.555.898c-.125.262-.22.543-.44 1.205l-.793 2.38zM14.642 5.59c.028.147.077.346.158.579a4.9 4.9 0 0 0 1.172 1.86c.647.646 1.335.99 1.86 1.172.232.08.431.129.578.157l.554-.554a2.664 2.664 0 0 0-3.768-3.768z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default PenOutlineIcon;