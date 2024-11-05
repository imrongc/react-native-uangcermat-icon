import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const AddDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={secondary}
      />
      <Path
        d="M7.87062 10.92C7.27415 10.92 6.79062 11.4035 6.79062 12C6.79062 12.5965 7.27415 13.08 7.87062 13.08H10.9201L10.9201 16.1295C10.9201 16.4867 11.0936 16.8034 11.3608 17H12.6395C12.9067 16.8034 13.0801 16.4867 13.0801 16.1295L13.0801 13.08H16.1296C16.7261 13.08 17.2096 12.5965 17.2096 12C17.2096 11.4035 16.7261 10.92 16.1296 10.92L13.0801 10.92L13.0801 7.87053C13.0801 7.27406 12.5966 6.79053 12.0001 6.79053C11.4037 6.79053 10.9201 7.27406 10.9201 7.87053V10.92H7.87062Z"
        fill={fill}
      />
    </Svg>
  );
};

export default AddDuotoneIcon;
