import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const DisketteDuotoneIcon = ({
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
        d="M19.682 19.682C21 18.364 21 16.2426 21 12C21 11.6927 21 11.539 20.9864 11.3828C20.9228 10.6544 20.6274 9.94131 20.1573 9.3813C20.0565 9.26118 19.9452 9.14985 19.7225 8.9272L15.0728 4.27749C14.8502 4.05485 14.7388 3.94351 14.6187 3.84268C14.0587 3.3726 13.3456 3.07723 12.6172 3.01364C12.461 3 12.3073 3 12 3C7.75736 3 5.63604 3 4.31802 4.31802C3 5.63604 3 7.75736 3 12C3 16.2426 3 18.364 4.31802 19.682C4.93365 20.2976 5.72454 20.6257 6.825 20.8005L8.175 20.9381C9.21522 21 10.4696 21 12 21C13.5304 21 14.7848 21 15.825 20.9381L17.175 20.8005C18.2755 20.6257 19.0663 20.2976 19.682 19.682Z"
        fill={secondary}
      />
      <Path
        d="M6.82495 8.4001C6.82495 8.02731 7.12716 7.7251 7.49995 7.7251H12.9C13.2727 7.7251 13.575 8.02731 13.575 8.4001C13.575 8.77289 13.2727 9.0751 12.9 9.0751H7.49995C7.12716 9.0751 6.82495 8.77289 6.82495 8.4001Z"
        fill={fill}
      />
      <Path
        d="M14.965 15.8969C14.4297 15.8249 13.7554 15.8249 12.9468 15.825H11.0532C10.2445 15.8249 9.57022 15.8249 9.03492 15.8969C8.46991 15.9728 7.95979 16.1399 7.54987 16.5499C7.13994 16.9598 6.97284 17.4699 6.89688 18.0349C6.82491 18.5702 6.82493 19.2445 6.82495 20.0531V20.7996L8.17496 20.9332V20.1C8.17496 19.2323 8.17639 18.6495 8.23484 18.2148C8.29067 17.7995 8.38718 17.6217 8.50446 17.5045C8.62174 17.3872 8.79949 17.2907 9.21481 17.2348C9.64954 17.1764 10.2323 17.175 11.1 17.175H12.9C13.7676 17.175 14.3504 17.1764 14.7851 17.2348C15.2004 17.2907 15.3782 17.3872 15.4955 17.5045C15.6127 17.6217 15.7092 17.7995 15.7651 18.2148C15.8235 18.6495 15.825 19.2323 15.825 20.1V20.9296L17.175 20.8031L17.175 20.0532C17.175 19.2445 17.175 18.5702 17.103 18.0349C17.0271 17.4699 16.86 16.9598 16.45 16.5499C16.0401 16.1399 15.53 15.9728 14.965 15.8969Z"
        fill={fill}
      />
    </Svg>
  );
};

export default DisketteDuotoneIcon;
