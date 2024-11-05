import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const QuestionOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M12 8.442a.94.94 0 0 0-.942.942.628.628 0 1 1-1.256 0 2.198 2.198 0 1 1 3.316 1.892 1.6 1.6 0 0 0-.39.308c-.085.102-.1.168-.1.207v1.046a.628.628 0 1 1-1.256 0v-1.046c0-.424.185-.768.4-1.02.21-.248.473-.438.706-.576A.941.941 0 0 0 12 8.442M12 16.186a.837.837 0 1 0 0-1.674.837.837 0 0 0 0 1.674"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-7.744a7.744 7.744 0 1 0 0 15.488 7.744 7.744 0 0 0 0-15.488"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default QuestionOutlineIcon;
