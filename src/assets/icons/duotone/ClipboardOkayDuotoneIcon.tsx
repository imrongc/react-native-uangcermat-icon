import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const ClipboardOkayDuotoneIcon = ({
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
        d="M20 15.5994V10.199C20 7.65315 20 6.38025 19.219 5.58937C18.5359 4.89776 17.4889 4.81095 15.5556 4.80005H8.44444C6.51109 4.81095 5.46406 4.89776 4.78105 5.58937C4 6.38025 4 7.65315 4 10.199V15.5994C4 18.1452 4 19.4181 4.78105 20.209C5.5621 20.9999 6.81918 20.9999 9.33333 20.9999H14.6667C17.1808 20.9999 18.4379 20.9999 19.219 20.209C20 19.4181 20 18.1452 20 15.5994Z"
        fill={secondary}
      />
      <Path
        d="M9.77767 3C9.04129 3 8.44434 3.60447 8.44434 4.35012V5.2502C8.44434 5.99584 9.04129 6.60031 9.77767 6.60031H14.2221C14.9585 6.60031 15.5554 5.99584 15.5554 5.2502V4.35012C15.5554 3.60447 14.9585 3 14.2221 3H9.77767Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3235 20.5386C14.772 21 15.4938 21 16.9375 21C18.3812 21 19.103 21 19.5515 20.5386C20 20.0773 20 19.3349 20 17.85C20 16.365 20 15.6226 19.5515 15.1613C19.103 14.7 18.3812 14.7 16.9375 14.7C15.4938 14.7 14.772 14.7 14.3235 15.1613C13.875 15.6226 13.875 16.365 13.875 17.85C13.875 19.3349 13.875 20.0773 14.3235 20.5386ZM18.6595 16.4287C18.8589 16.6337 18.8589 16.9662 18.6595 17.1712L16.6179 19.2712C16.4185 19.4762 16.0954 19.4762 15.896 19.2712L15.2155 18.5712C15.0161 18.3662 15.0161 18.0337 15.2155 17.8287C15.4148 17.6237 15.738 17.6237 15.9373 17.8287L16.2569 18.1575L17.9377 16.4287C18.137 16.2237 18.4602 16.2237 18.6595 16.4287Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ClipboardOkayDuotoneIcon;