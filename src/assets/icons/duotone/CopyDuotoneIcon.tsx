import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const CopyDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M7.19971 11.4577C7.19971 9.00408 7.19971 7.77728 7.94953 7.01504C8.69935 6.25281 9.90617 6.25281 12.3198 6.25281H14.8799C17.2935 6.25281 18.5003 6.25281 19.2502 7.01504C20 7.77728 20 9.00408 20 11.4577V15.7951C20 18.2487 20 19.4755 19.2502 20.2377C18.5003 20.9999 17.2935 20.9999 14.8799 20.9999H12.3198C9.90617 20.9999 8.69935 20.9999 7.94953 20.2377C7.19971 19.4755 7.19971 18.2487 7.19971 15.7951V11.4577Z"
        fill={fill}
      />
      <Path
        d="M5.04142 4.05443C4 5.10885 4 6.80593 4 10.2001V12.0001C4 15.3942 4 17.0913 5.04142 18.1457C5.59038 18.7015 6.31569 18.9644 7.3699 19.0887C7.19972 18.3319 7.19972 17.2918 7.19972 15.7951V11.4577C7.19972 9.00414 7.19972 7.77734 7.94955 7.0151C8.69937 6.25286 9.90619 6.25286 12.3198 6.25286H14.8799C16.3482 6.25286 17.3699 6.25287 18.1138 6.42448C17.9917 5.35034 17.7322 4.6124 17.1811 4.05443C16.1397 3 14.4635 3 11.1113 3C7.75898 3 6.08284 3 5.04142 4.05443Z"
        fill={secondary}
      />
    </Svg>
  );
};

export default CopyDuotoneIcon;
