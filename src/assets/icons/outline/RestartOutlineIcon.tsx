import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const RestartOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M18.01 3c.522 0 .945.424.945.947v3.975a.946.946 0 0 1-.944.947h-4.008a.946.946 0 0 1-.944-.947c0-.523.423-.948.944-.948h1.45c-2.547-1.548-5.926-1.228-8.131.959a6.5 6.5 0 0 0 0 9.251c2.582 2.562 6.774 2.562 9.357 0a6.5 6.5 0 0 0 1.88-5.443.945.945 0 1 1 1.874-.238 8.4 8.4 0 0 1-2.426 7.028c-3.319 3.292-8.695 3.292-12.014 0a8.4 8.4 0 0 1 0-11.945C9.014 3.59 13.74 3.32 17.066 5.779V3.947c0-.523.423-.947.945-.947"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default RestartOutlineIcon;
