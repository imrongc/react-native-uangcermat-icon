import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const LockKeyholeUnlockedOutlineIcon = ({
  fill,
  size = 24,
}: OutlineIconType) => {
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
        d="M9.698 15.349a2.302 2.302 0 1 1 4.604 0 2.302 2.302 0 0 1-4.604 0M12 14.302a1.047 1.047 0 1 0 0 2.093 1.047 1.047 0 0 0 0-2.093"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M7.605 8.651a4.395 4.395 0 0 1 8.652-1.1.628.628 0 0 0 1.216-.312A5.653 5.653 0 0 0 6.35 8.65v1.09a9 9 0 0 0-.537.054c-.754.102-1.389.318-1.892.822-.504.504-.721 1.139-.822 1.892C3 13.235 3 14.158 3 15.303v.092c0 1.145 0 2.068.098 2.793.1.754.318 1.389.822 1.893.503.503 1.138.72 1.892.821C6.537 21 7.46 21 8.605 21h6.79c1.145 0 2.068 0 2.793-.098.754-.1 1.389-.318 1.893-.822.503-.503.72-1.138.821-1.892.098-.725.098-1.648.098-2.793v-.092c0-1.145 0-2.068-.098-2.794-.1-.753-.318-1.388-.822-1.892-.503-.504-1.138-.72-1.892-.822-.725-.097-1.648-.097-2.793-.097h-6.79q-.531 0-1 .003zM5.979 11.04c-.614.082-.94.234-1.171.465-.232.232-.383.557-.466 1.172-.085.632-.086 1.47-.086 2.672s.001 2.04.086 2.672c.083.614.234.94.466 1.171.231.232.557.383 1.17.466.633.085 1.471.086 2.673.086h6.698c1.202 0 2.04-.001 2.672-.086.614-.083.94-.234 1.171-.466.232-.231.383-.557.466-1.17.085-.633.086-1.471.086-2.673s-.001-2.04-.086-2.672c-.083-.615-.234-.94-.466-1.172-.231-.232-.557-.383-1.17-.465-.633-.085-1.471-.086-2.673-.086H8.65c-1.202 0-2.04 0-2.672.086"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default LockKeyholeUnlockedOutlineIcon;
