import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const ShieldCheckOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M14.51 10.744a.637.637 0 0 0-.049-.887.607.607 0 0 0-.869.05l-2.471 2.825-.713-.815a.607.607 0 0 0-.87-.05.637.637 0 0 0-.048.886l1.172 1.34a.61.61 0 0 0 .918 0z"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M12 3c-.77 0-1.504.257-2.688.67l-.597.21c-1.216.424-2.154.751-2.825 1.03-.339.14-.63.276-.864.414-.225.134-.451.3-.605.524-.151.22-.23.492-.28.753a8 8 0 0 0-.101.971C4 8.315 4 9.332 4 10.652v1.34c0 5.109 3.781 7.558 6.03 8.56l.022.01c.278.124.54.24.842.32.317.082.655.118 1.106.118.45 0 .789-.035 1.106-.119.302-.078.563-.195.842-.32l.023-.01C16.219 19.55 20 17.102 20 11.994v-1.341c0-1.32 0-2.337-.04-3.08-.02-.374-.05-.7-.102-.971-.05-.261-.128-.532-.28-.753-.153-.223-.38-.39-.604-.524a7 7 0 0 0-.864-.414c-.671-.279-1.61-.606-2.825-1.03l-.597-.21C13.505 3.258 12.77 3 12 3M9.605 4.896c1.324-.463 1.855-.64 2.395-.64s1.07.177 2.395.64l.47.164c1.242.433 2.147.75 2.782 1.013.317.132.547.242.709.337q.118.072.17.117c.032.026.044.04.045.042s.012.02.026.062q.026.069.053.208c.036.19.063.45.081.802.038.704.038 1.687.038 3.033v1.319c0 4.332-3.175 6.465-5.291 7.408-.305.136-.48.213-.677.264-.187.049-.415.08-.801.08s-.614-.031-.801-.08c-.196-.051-.372-.128-.677-.264-2.116-.943-5.291-3.076-5.291-7.408v-1.319c0-1.346 0-2.33.038-3.033.018-.352.045-.613.081-.802q.027-.14.053-.208a.4.4 0 0 1 .026-.062.3.3 0 0 1 .044-.042q.054-.046.172-.117c.16-.095.39-.205.708-.337.635-.263 1.54-.58 2.782-1.013z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ShieldCheckOutlineIcon;