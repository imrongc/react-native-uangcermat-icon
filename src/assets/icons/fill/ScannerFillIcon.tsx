import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const ScannerFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12m7.204-5.623a.675.675 0 1 0-.008-1.35c-.973.005-1.782.027-2.442.142-.676.119-1.255.344-1.729.795-.41.39-.683.786-.832 1.353-.135.515-.16 1.147-.166 1.978a.675.675 0 0 0 1.35.01c.007-.854.036-1.32.121-1.645.072-.272.186-.458.458-.718.218-.207.515-.353 1.031-.443.532-.093 1.233-.117 2.217-.122m3.6-1.35a.675.675 0 0 0-.008 1.35c.984.005 1.685.029 2.217.122.516.09.813.236 1.03.443.273.26.387.446.459.718.085.326.114.791.121 1.645a.675.675 0 1 0 1.35-.01c-.006-.83-.03-1.463-.166-1.978-.149-.567-.423-.963-.832-1.353-.474-.45-1.053-.676-1.73-.795-.66-.115-1.468-.137-2.441-.142M5.7 11.325a.675.675 0 0 0 0 1.35h12.6a.675.675 0 1 0 0-1.35zm.677 3.37a.675.675 0 1 0-1.35.01c.006.83.03 1.464.166 1.978.149.567.423.963.832 1.353.474.45 1.053.676 1.73.795.66.115 1.468.137 2.441.143a.675.675 0 1 0 .008-1.35c-.984-.006-1.685-.03-2.217-.123-.516-.09-.813-.236-1.03-.443-.273-.26-.387-.446-.459-.718-.085-.325-.114-.791-.121-1.645m12.596.01a.675.675 0 1 0-1.35-.01c-.007.854-.036 1.32-.121 1.645-.072.272-.186.459-.458.718-.218.207-.515.353-1.031.443-.532.093-1.233.117-2.217.123a.675.675 0 1 0 .008 1.35c.973-.006 1.782-.028 2.442-.143.676-.119 1.255-.344 1.729-.795.41-.39.683-.785.832-1.353.136-.514.16-1.147.166-1.978"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ScannerFillIcon;
