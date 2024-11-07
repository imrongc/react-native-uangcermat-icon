import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const HeartOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M6.662 5.616c-1.389.648-2.406 2.19-2.406 4.029 0 1.878.753 3.326 1.832 4.567.89 1.023 1.966 1.87 3.016 2.697q.376.295.741.588c.44.354.833.665 1.212.891s.684.33.943.33c.26 0 .564-.104.943-.33s.771-.537 1.212-.891q.366-.293.74-.588c1.05-.826 2.128-1.674 3.017-2.697 1.08-1.24 1.832-2.689 1.832-4.567 0-1.839-1.017-3.381-2.406-4.03-1.35-.63-3.163-.462-4.886 1.366a.62.62 0 0 1-.904 0C9.825 5.153 8.012 4.986 6.662 5.616m5.338.03c-1.936-1.77-4.103-2.017-5.86-1.197C4.285 5.315 3 7.326 3 9.645c0 2.279.93 4.017 2.149 5.419.976 1.122 2.171 2.062 3.227 2.892q.359.282.692.548c.428.345.889.713 1.355.991.467.279.999.505 1.577.505s1.11-.226 1.577-.505c.466-.278.927-.646 1.355-.991q.332-.267.692-.548c1.056-.83 2.25-1.77 3.227-2.892 1.22-1.402 2.149-3.14 2.149-5.42 0-2.318-1.285-4.329-3.14-5.195-1.757-.82-3.924-.572-5.86 1.196"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default HeartOutlineIcon;