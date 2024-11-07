import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const CameraRotateOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M14.737 9.538a.62.62 0 0 0-.627-.615.62.62 0 0 0-.628.615v.118a3.33 3.33 0 0 0-3.801.596 3.17 3.17 0 0 0 0 4.546 3.327 3.327 0 0 0 4.638 0 3.18 3.18 0 0 0 .94-1.908.62.62 0 0 0-.553-.68.625.625 0 0 0-.695.541c-.05.43-.243.846-.58 1.177a2.053 2.053 0 0 1-2.862 0 1.956 1.956 0 0 1 0-2.806 2.05 2.05 0 0 1 2.003-.5.61.61 0 0 0-.35.684.63.63 0 0 0 .745.476l1.272-.263a.62.62 0 0 0 .498-.602z"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M10.632 4c-1.118 0-2.094.76-2.317 1.835a.55.55 0 0 1-.52.43h-.027c-1.175.051-2.077.193-2.83.677a4.3 4.3 0 0 0-1.202 1.156c-.396.57-.57 1.225-.654 2.016C3 10.887 3 11.856 3 13.084v.07c0 1.227 0 2.197.082 2.97.083.791.258 1.446.654 2.016.318.458.726.85 1.201 1.156.59.378 1.264.545 2.083.626.802.078 1.808.078 3.085.078h3.79c1.277 0 2.283 0 3.085-.078.819-.08 1.494-.248 2.083-.626a4.3 4.3 0 0 0 1.201-1.156c.396-.57.57-1.225.654-2.016.082-.773.082-1.743.082-2.97v-.07c0-1.228 0-2.197-.082-2.97-.083-.791-.258-1.446-.654-2.016a4.3 4.3 0 0 0-1.201-1.156c-.754-.484-1.656-.626-2.831-.676h-.028a.55.55 0 0 1-.519-.43C15.462 4.76 14.485 4 13.368 4zM9.546 6.08c.1-.486.55-.85 1.086-.85h2.736c.537 0 .985.364 1.086.85a1.796 1.796 0 0 0 1.735 1.416c1.13.05 1.734.185 2.185.475.338.217.627.496.852.82.231.333.37.758.443 1.45.074.702.075 1.608.075 2.878s0 2.175-.075 2.878c-.073.691-.212 1.117-.443 1.45a3 3 0 0 1-.852.82c-.35.224-.797.36-1.52.43-.731.072-1.674.072-2.993.072h-3.722c-1.319 0-2.262 0-2.994-.072-.722-.07-1.17-.206-1.519-.43a3 3 0 0 1-.852-.82c-.231-.333-.37-.759-.443-1.45-.074-.703-.075-1.608-.075-2.878s0-2.176.075-2.878c.073-.692.212-1.117.443-1.45.225-.324.514-.603.852-.82.451-.29 1.056-.426 2.185-.475a1.796 1.796 0 0 0 1.735-1.415"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CameraRotateOutlineIcon;