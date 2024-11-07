import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const ClipboardEditDuotoneIcon = ({
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
        d="M19 15.5994V10.199C19 7.65315 19 6.38025 18.219 5.58937C17.5359 4.89776 16.4889 4.81095 14.5556 4.80005H7.44444C5.51109 4.81095 4.46406 4.89776 3.78105 5.58937C3 6.38025 3 7.65315 3 10.199V15.5994C3 18.1452 3 19.4181 3.78105 20.209C4.5621 20.9999 5.81918 20.9999 8.33333 20.9999H13.6667C16.1808 20.9999 17.4379 20.9999 18.219 20.209C19 19.4181 19 18.1452 19 15.5994Z"
        fill={secondary}
      />
      <Path
        d="M7.44446 4.35012C7.44446 3.60447 8.04141 3 8.77779 3H13.2222C13.9586 3 14.5556 3.60447 14.5556 4.35012V5.2502C14.5556 5.99584 13.9586 6.60031 13.2222 6.60031H8.77779C8.04141 6.60031 7.44446 5.99584 7.44446 5.2502V4.35012Z"
        fill={fill}
      />
      <Path
        d="M20.43 10.823C21.1901 10.0628 21.1901 8.8303 20.43 8.07013C19.6698 7.30996 18.4373 7.30996 17.6771 8.07013L17.5626 8.18463C17.4521 8.29513 17.4021 8.44947 17.4297 8.60327C17.447 8.70002 17.4792 8.84148 17.5378 9.01027C17.6549 9.34782 17.8761 9.79094 18.2926 10.2075C18.7092 10.624 19.1523 10.8452 19.4898 10.9623C19.6586 11.0209 19.8001 11.0531 19.8968 11.0704C20.0506 11.098 20.205 11.048 20.3155 10.9375L20.43 10.823Z"
        fill={fill}
      />
      <Path
        d="M15.1671 16.0512C15.3246 15.9283 15.4675 15.7855 15.7531 15.4998L19.3148 11.9381C19.4009 11.852 19.3615 11.7037 19.2465 11.6638C18.826 11.5179 18.2792 11.2441 17.7676 10.7325C17.256 10.2209 16.9822 9.67405 16.8363 9.25364C16.7964 9.13859 16.6481 9.09918 16.562 9.18529L13.0003 12.747C12.7146 13.0326 12.5718 13.1755 12.4489 13.333C12.304 13.5188 12.1798 13.7198 12.0784 13.9325C11.9925 14.1129 11.9286 14.3045 11.8008 14.6878L11.127 16.7091C11.0642 16.8977 11.1133 17.1056 11.2539 17.2462C11.3945 17.3868 11.6024 17.4359 11.791 17.373L13.8123 16.6993C14.1954 16.5716 14.3873 16.5076 14.5676 16.4217C14.7803 16.3203 14.9813 16.1961 15.1671 16.0512Z"
        fill={fill}
      />
      <Path
        d="M6.89737 13.4651C6.5575 13.4651 6.28198 13.7462 6.28198 14.093C6.28198 14.4398 6.5575 14.7209 6.89737 14.7209L9.26993 14.7209C9.6098 14.7209 9.87993 14.4398 9.87993 14.093C9.87993 13.7462 9.6098 13.4651 9.26993 13.4651L6.89737 13.4651Z"
        fill={fill}
      />
      <Path
        d="M8.99993 17.0232C8.99993 17.37 8.7298 17.6511 8.38993 17.6511L6.89737 17.6512L6.88714 17.6511H6.77166V17.6381C6.49208 17.5788 6.28198 17.3261 6.28198 17.0233C6.28198 16.7204 6.49208 16.4677 6.77166 16.4085V16.3953H8.38993C8.7298 16.3953 8.99993 16.6764 8.99993 17.0232Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ClipboardEditDuotoneIcon;