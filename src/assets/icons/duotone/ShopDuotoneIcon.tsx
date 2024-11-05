import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const ShopDuotoneIcon = ({ fill, secondary, size = 24 }: DuotoneIconType) => {
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
        d="M5.30225 10.9396C6.22692 10.9395 6.97648 10.2491 6.97648 9.39746C6.97648 10.2492 7.72615 10.9396 8.6509 10.9396C9.57566 10.9396 10.3253 10.2492 10.3253 9.39746C10.3253 10.2492 11.075 10.9396 11.9997 10.9396C12.9245 10.9396 13.6742 10.2492 13.6742 9.39746C13.6742 10.2492 14.4238 10.9396 15.3486 10.9396C16.2733 10.9396 17.023 10.2492 17.023 9.39746C17.023 10.2492 17.7727 10.9396 18.6974 10.9396L18.6976 18.8432L14.0929 18.8432V16.7228C14.0929 16.0021 14.0929 15.6418 13.9247 15.3734C13.8145 15.1975 13.6559 15.0515 13.465 14.95C13.1736 14.795 12.7824 14.795 11.9999 14.795C11.2175 14.795 10.8262 14.795 10.5348 14.95C10.3439 15.0515 10.1854 15.1975 10.0751 15.3734C9.9069 15.6418 9.9069 16.0021 9.9069 16.7228V18.8432L5.30225 18.8432L5.30225 10.9396Z"
        fill={secondary}
      />
      <Path
        d="M15.7908 4H8.20933C7.20232 4 6.69881 4 6.29419 4.23032C5.88956 4.46064 5.66438 4.87542 5.21404 5.70498L4.03892 8.4409C3.76742 9.073 3.52987 9.81802 3.98689 10.3518C4.29349 10.7099 4.76876 10.9398 5.30235 10.9398C6.22711 10.9398 6.97677 10.2493 6.97677 9.39759C6.97677 10.2493 7.72643 10.9398 8.65119 10.9398C9.57594 10.9398 10.3256 10.2493 10.3256 9.39759C10.3256 10.2493 11.0753 10.9398 12 10.9398C12.9248 10.9398 13.6744 10.2493 13.6744 9.39759C13.6744 10.2493 14.4241 10.9398 15.3489 10.9398C16.2736 10.9398 17.0233 10.2493 17.0233 9.39759C17.0233 10.2493 17.7729 10.9398 18.6977 10.9398C19.2313 10.9398 19.7066 10.7099 20.0132 10.3518C20.4702 9.81802 20.2327 9.073 19.9612 8.4409L18.7861 5.70498C18.3357 4.87543 18.1106 4.46064 17.7059 4.23032C17.3013 4 16.7978 4 15.7908 4Z"
        fill={fill}
      />
      <Path
        d="M9.90698 18.8432V16.7228C9.90698 16.0021 9.90698 15.6418 10.0752 15.3734C10.1855 15.1975 10.344 15.0515 10.5349 14.95C10.8263 14.795 11.2175 14.795 12 14.795C12.7825 14.795 13.1737 14.795 13.4651 14.95C13.656 15.0515 13.8146 15.1975 13.9248 15.3734C14.093 15.6418 14.093 16.0021 14.093 16.7228V18.8432H9.90698Z"
        fill={fill}
      />
      <Path
        d="M9.90698 18.8432H14.093L20.3721 18.8433C20.7189 18.8433 21 19.1022 21 19.4216C21 19.741 20.7189 19.9999 20.3721 19.9999H3.62791C3.28112 19.9999 3 19.741 3 19.4216C3 19.1022 3.28112 18.8433 3.62791 18.8433L9.90698 18.8432Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ShopDuotoneIcon;
