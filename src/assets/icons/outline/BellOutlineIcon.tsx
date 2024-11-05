import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const BellOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M12 3C8.605 3 5.852 5.905 5.852 9.488v.59c0 .583-.163 1.154-.47 1.64l-.911 1.442c-1.058 1.674-.25 3.95 1.589 4.479q.9.258 1.812.438l.001.004A4.38 4.38 0 0 0 12 21a4.38 4.38 0 0 0 4.127-2.92l.001-.003q.913-.18 1.812-.438c1.84-.53 2.647-2.805 1.59-4.48l-.912-1.442a3.07 3.07 0 0 1-.47-1.64v-.589C18.148 5.905 15.395 3 12 3m2.678 15.31c-1.779.224-3.577.224-5.356 0A3.2 3.2 0 0 0 12 19.744a3.2 3.2 0 0 0 2.678-1.434M7.042 9.488c0-2.89 2.22-5.232 4.958-5.232s4.958 2.343 4.958 5.232v.59c0 .831.233 1.644.67 2.336l.911 1.442c.607.961.144 2.267-.912 2.571a20.3 20.3 0 0 1-11.254 0c-1.056-.304-1.52-1.61-.912-2.57l.911-1.443c.437-.692.67-1.505.67-2.336z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default BellOutlineIcon;
