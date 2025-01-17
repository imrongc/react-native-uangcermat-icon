import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const DiagramUpFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M4.256 3.628a.628.628 0 1 0-1.256 0v8.42c0 1.933 0 3.447.159 4.629.162 1.21.502 2.164 1.251 2.913.75.75 1.704 1.088 2.913 1.251C8.505 21 10.02 21 11.952 21h8.42a.628.628 0 1 0 0-1.256H12c-1.991 0-3.421-.001-4.51-.148-1.07-.143-1.715-.417-2.192-.894s-.75-1.122-.895-2.192c-.146-1.089-.147-2.519-.147-4.51z"
      />
      <Path
        fill={fill}
        d="M18.352 8.204a.628.628 0 1 0-.983-.78l-2.61 3.287c-.206.258-.34.427-.452.55a.8.8 0 0 1-.182.164.63.63 0 0 1-.568.013.8.8 0 0 1-.19-.157c-.116-.117-.258-.28-.474-.53l-.014-.015c-.199-.23-.368-.426-.518-.576a2 2 0 0 0-.537-.404 1.88 1.88 0 0 0-1.703.037c-.207.11-.37.263-.52.427-.142.157-.304.36-.493.598L6.485 14.12a.628.628 0 1 0 .983.781l2.611-3.287c.205-.259.34-.428.451-.55a.8.8 0 0 1 .183-.165.63.63 0 0 1 .567-.012.8.8 0 0 1 .19.157c.116.117.258.28.474.53l.014.015c.2.23.369.425.519.576.155.157.326.303.537.404.541.26 1.174.246 1.703-.037.206-.11.37-.264.519-.427.143-.157.304-.36.493-.598z"
      />
    </Svg>
  );
};

export default DiagramUpFillIcon;
