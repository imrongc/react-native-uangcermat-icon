import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const QrCodeDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
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
        d="M16.0724 3H16.1339C16.9293 2.99999 17.5707 2.99999 18.0871 3.04909C18.6197 3.09972 19.0836 3.20697 19.5009 3.46264C19.9233 3.72152 20.2785 4.07669 20.5374 4.49913C20.793 4.91636 20.9003 5.38034 20.9509 5.91288C21 6.42927 21 7.07074 21 7.86614V7.92765C21 8.45028 21 8.88643 20.9663 9.24069C20.9311 9.61103 20.8547 9.95617 20.6607 10.2727C20.4709 10.5825 20.2104 10.843 19.9006 11.0328C19.5841 11.2268 19.2389 11.3032 18.8686 11.3384C18.5143 11.3721 18.0782 11.3721 17.5555 11.3721L16.5611 11.3721C15.8089 11.3721 15.1816 11.3721 14.6837 11.3052C14.1581 11.2345 13.6836 11.0791 13.3022 10.6978C12.9209 10.3164 12.7655 9.8419 12.6948 9.31631C12.6279 8.81835 12.6279 8.1911 12.6279 7.43889L12.6279 6.44452C12.6279 5.92189 12.6279 5.48567 12.6616 5.13141C12.6968 4.76106 12.7732 4.41593 12.9672 4.09937C13.157 3.78957 13.4175 3.52911 13.7273 3.33927C14.0438 3.14528 14.389 3.06888 14.7593 3.03366C15.1136 2.99998 15.5498 2.99999 16.0724 3Z"
        fill={secondary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2727 3.33927C9.95617 3.14528 9.61103 3.06888 9.24069 3.03366C8.88642 2.99998 8.45025 2.99999 7.92759 3H7.86616C7.07076 2.99999 6.42926 2.99999 5.91288 3.04909C5.38034 3.09972 4.91636 3.20697 4.49913 3.46264C4.07669 3.72152 3.72152 4.07669 3.46264 4.49913C3.20697 4.91636 3.09972 5.38034 3.04909 5.91288C2.99999 6.42926 2.99999 7.07072 3 7.86611V7.92755C2.99999 8.45021 2.99998 8.88642 3.03366 9.24069C3.06888 9.61103 3.14528 9.95617 3.33927 10.2727C3.52911 10.5825 3.78957 10.843 4.09937 11.0328C4.41593 11.2268 4.76106 11.3032 5.13141 11.3384C5.48565 11.3721 5.92179 11.3721 6.4444 11.3721L7.43888 11.3721C8.19108 11.3721 8.81836 11.3721 9.31631 11.3052C9.8419 11.2345 10.3164 11.0791 10.6978 10.6978C11.0791 10.3164 11.2345 9.8419 11.3052 9.31631C11.3721 8.81836 11.3721 8.19111 11.3721 7.43891L11.3721 6.44453C11.3721 5.92192 11.3721 5.48565 11.3384 5.13141C11.3032 4.76106 11.2268 4.41593 11.0328 4.09937C10.843 3.78957 10.5825 3.52911 10.2727 3.33927Z"
        fill={secondary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.31631 12.6948C9.8419 12.7655 10.3164 12.9209 10.6978 13.3022C11.0791 13.6836 11.2345 14.1581 11.3052 14.6837C11.3721 15.1816 11.3721 15.8089 11.3721 16.5611L11.3721 17.5555C11.3721 18.0781 11.3721 18.5143 11.3384 18.8686C11.3032 19.2389 11.2268 19.5841 11.0328 19.9006C10.843 20.2104 10.5825 20.4709 10.2727 20.6607C9.95617 20.8547 9.61103 20.9311 9.24069 20.9663C8.88643 21 8.45019 21 7.92756 21H7.86614C7.07074 21 6.42927 21 5.91288 20.9509C5.38034 20.9003 4.91636 20.793 4.49913 20.5374C4.07669 20.2785 3.72152 19.9233 3.46264 19.5009C3.20697 19.0836 3.09972 18.6197 3.04909 18.0871C2.99999 17.5707 2.99999 16.9293 3 16.1339V16.0724C2.99999 15.5498 2.99998 15.1136 3.03366 14.7593C3.06888 14.389 3.14528 14.0438 3.33927 13.7273C3.52911 13.4175 3.78957 13.157 4.09937 12.9672C4.41593 12.7732 4.76106 12.6968 5.13141 12.6616C5.48566 12.6279 5.92183 12.6279 6.44445 12.6279L7.43889 12.6279C8.1911 12.6279 8.81835 12.6279 9.31631 12.6948Z"
        fill={secondary}
      />
      <Path
        d="M12.6279 16.1539V16.186H13.8837C13.8837 15.5851 13.8845 15.1816 13.9158 14.874C13.946 14.5769 13.9994 14.4396 14.0601 14.3488C14.1364 14.2346 14.2346 14.1364 14.3488 14.0601C14.4396 13.9994 14.5769 13.946 14.874 13.9158C15.1816 13.8845 15.5851 13.8837 16.186 13.8837H17.8605V12.6279H16.1539C15.5934 12.6279 15.1256 12.6279 14.7469 12.6664C14.3505 12.7067 13.9827 12.7944 13.6511 13.0159C13.3997 13.1839 13.1839 13.3997 13.0159 13.6511C12.7944 13.9827 12.7067 14.3505 12.6664 14.7469C12.6279 15.1256 12.6279 15.5934 12.6279 16.1539Z"
        fill={secondary}
      />
      <Path
        d="M21 17.8816V17.8605H19.7442C19.7442 18.2591 19.7438 18.5267 19.7297 18.7339C19.716 18.9354 19.6913 19.0336 19.6645 19.0982C19.5583 19.3546 19.3546 19.5583 19.0982 19.6645C19.0336 19.6913 18.9354 19.716 18.7339 19.7297C18.5267 19.7438 18.2591 19.7442 17.8605 19.7442H16.186V21H17.8816C18.2537 21 18.5643 21 18.8194 20.9826C19.0849 20.9645 19.3356 20.9254 19.5787 20.8247C20.1429 20.5911 20.5911 20.1429 20.8247 19.5787C20.9254 19.3356 20.9645 19.0849 20.9826 18.8194C21 18.5643 21 18.2537 21 17.8816Z"
        fill={secondary}
      />
      <Path
        d="M13.8837 20.3721C13.8837 20.7189 13.6026 21 13.2558 21C12.909 21 12.6279 20.7189 12.6279 20.3721V17.8605H13.8837V20.3721Z"
        fill={secondary}
      />
      <Path
        d="M20.3721 12.6279C20.0253 12.6279 19.7442 12.909 19.7442 13.2558V16.186H21V13.2558C21 12.909 20.7189 12.6279 20.3721 12.6279Z"
        fill={secondary}
      />
      <Path
        d="M7.18604 8.23267C6.75453 8.23267 6.53878 8.23267 6.38644 8.12458C6.33269 8.08644 6.28576 8.03951 6.24762 7.98575C6.13953 7.83342 6.13953 7.61766 6.13953 7.18616C6.13953 6.75466 6.13953 6.53891 6.24762 6.38657C6.28576 6.33281 6.33269 6.28588 6.38644 6.24774C6.53878 6.13965 6.75453 6.13965 7.18604 6.13965C7.61754 6.13965 7.83329 6.13965 7.98563 6.24774C8.03938 6.28588 8.08632 6.33281 8.12446 6.38657C8.23255 6.53891 8.23255 6.75466 8.23255 7.18616C8.23255 7.61766 8.23255 7.83342 8.12446 7.98575C8.08632 8.03951 8.03938 8.08644 7.98563 8.12458C7.83329 8.23267 7.61754 8.23267 7.18604 8.23267Z"
        fill={fill}
      />
      <Path
        d="M16.0143 8.12458C16.1667 8.23267 16.3824 8.23267 16.8139 8.23267C17.2454 8.23267 17.4612 8.23267 17.6135 8.12458C17.6673 8.08644 17.7142 8.03951 17.7524 7.98575C17.8605 7.83342 17.8605 7.61766 17.8605 7.18616C17.8605 6.75466 17.8605 6.53891 17.7524 6.38657C17.7142 6.33281 17.6673 6.28588 17.6135 6.24774C17.4612 6.13965 17.2454 6.13965 16.8139 6.13965C16.3824 6.13965 16.1667 6.13965 16.0143 6.24774C15.9606 6.28588 15.9137 6.33281 15.8755 6.38657C15.7674 6.5389 15.7674 6.75467 15.7674 7.18617C15.7674 7.61767 15.7674 7.83342 15.8755 7.98575C15.9137 8.03951 15.9606 8.08644 16.0143 8.12458Z"
        fill={fill}
      />
      <Path
        d="M6.38644 17.7525C6.53878 17.8606 6.75453 17.8606 7.18604 17.8606C7.61754 17.8606 7.83329 17.8606 7.98563 17.7525C8.03938 17.7143 8.08632 17.6674 8.12446 17.6137C8.23255 17.4613 8.23255 17.2456 8.23255 16.8141C8.23255 16.3826 8.23255 16.1668 8.12446 16.0145C8.08632 15.9607 8.03938 15.9138 7.98563 15.8756C7.83329 15.7676 7.61752 15.7676 7.18603 15.7676C6.75453 15.7676 6.53878 15.7676 6.38644 15.8756C6.33269 15.9138 6.28576 15.9607 6.24762 16.0145C6.13953 16.1668 6.13953 16.3826 6.13953 16.8141C6.13953 17.2456 6.13953 17.4613 6.24762 17.6137C6.28576 17.6674 6.33269 17.7143 6.38644 17.7525Z"
        fill={fill}
      />
      <Path
        d="M15.6 16.9501C15.6 16.5308 15.6 16.3211 15.6685 16.1557C15.7598 15.9352 15.935 15.76 16.1556 15.6686C16.321 15.6001 16.5306 15.6001 16.95 15.6001C17.3693 15.6001 17.579 15.6001 17.7444 15.6686C17.9649 15.76 18.1401 15.9352 18.2315 16.1557C18.3 16.3211 18.3 16.5308 18.3 16.9501C18.3 17.3694 18.3 17.5791 18.2315 17.7445C18.1401 17.965 17.9649 18.1402 17.7444 18.2316C17.579 18.3001 17.3693 18.3001 16.95 18.3001C16.5306 18.3001 16.321 18.3001 16.1556 18.2316C15.935 18.1402 15.7598 17.965 15.6685 17.7445C15.6 17.5791 15.6 17.3694 15.6 16.9501Z"
        fill={fill}
      />
    </Svg>
  );
};

export default QrCodeDuotoneIcon;