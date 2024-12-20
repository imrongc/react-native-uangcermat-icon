import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const DownloadDuotoneIcon = ({
  fill,
  secondary,
  size = 24,
}: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        opacity={0.5}
        d="M20.9999 15.7952V14.9278C20.9999 12.4742 20.9997 11.2478 20.2089 10.4856C19.4181 9.72341 18.1453 9.72341 15.5998 9.72341H8.39978C5.8542 9.72341 4.58141 9.72341 3.7906 10.4856C3 11.2477 3 12.4736 3 14.9259V14.9278V15.7952C3 18.2488 3 19.4756 3.79081 20.2378C4.58162 21 5.85441 21 8.39998 21H15.6H15.6C18.1455 21 19.4183 21 20.2091 20.2378C20.9999 19.4756 20.9999 18.2488 20.9999 15.7952Z"
        fill={secondary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C11.6272 3 11.325 3.29128 11.325 3.6506L11.325 13.1689L9.8125 11.4681C9.5699 11.1953 9.14377 11.1637 8.86073 11.3975C8.57768 11.6313 8.5449 12.0421 8.78751 12.3149L11.4875 15.351C11.6157 15.4952 11.803 15.5782 12 15.5782C12.197 15.5782 12.3843 15.4952 12.5125 15.351L15.2125 12.3149C15.4551 12.0421 15.4223 11.6313 15.1393 11.3975C14.8562 11.1637 14.4301 11.1953 14.1875 11.4681L12.675 13.1689L12.675 3.6506C12.675 3.29128 12.3728 3 12 3Z"
        fill={fill}
      />
    </Svg>
  );
};

export default DownloadDuotoneIcon;
