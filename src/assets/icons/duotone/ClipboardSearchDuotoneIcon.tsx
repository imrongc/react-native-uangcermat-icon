import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const ClipboardSearchDuotoneIcon = ({
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
        d="M19.5468 15.2353V9.99091C19.5468 7.51869 19.5468 6.28257 18.7879 5.51455C18.1242 4.84293 17.1069 4.75863 15.2283 4.74805H8.31857C6.43997 4.75863 5.42259 4.84293 4.75893 5.51455C4 6.28257 4 7.51869 4 9.99091V15.2353C4 17.7075 4 18.9436 4.75893 19.7117C5.51785 20.4797 6.73933 20.4797 9.18227 20.4797H14.3646C16.8075 20.4797 18.029 20.4797 18.7879 19.7117C19.5468 18.9436 19.5468 17.7075 19.5468 15.2353Z"
        fill={secondary}
      />
      <Path
        d="M9.61405 3C8.89853 3 8.31848 3.587 8.31848 4.3111V5.18516C8.31848 5.90926 8.89853 6.49626 9.61405 6.49626H13.9326C14.6481 6.49626 15.2282 5.90926 15.2282 5.18516V4.3111C15.2282 3.587 14.6481 3 13.9326 3H9.61405Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0852 17.0462C13.0852 15.3223 14.451 13.9248 16.1358 13.9248C17.8206 13.9248 19.1864 15.3223 19.1864 17.0462C19.1864 17.6824 19.0004 18.2741 18.681 18.7676L19.8212 19.9342C20.0595 20.178 20.0595 20.5733 19.8212 20.8171C19.583 21.0609 19.1967 21.0609 18.9584 20.8171L17.8182 19.6504C17.3359 19.9773 16.7576 20.1676 16.1358 20.1676C14.451 20.1676 13.0852 18.7701 13.0852 17.0462ZM14.3055 17.0462C14.3055 16.0119 15.1249 15.1734 16.1358 15.1734C17.1467 15.1734 17.9662 16.0119 17.9662 17.0462C17.9662 18.0805 17.1467 18.919 16.1358 18.919C15.1249 18.919 14.3055 18.0805 14.3055 17.0462Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ClipboardSearchDuotoneIcon;