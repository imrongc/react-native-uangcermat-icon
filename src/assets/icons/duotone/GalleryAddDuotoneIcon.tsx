import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const GalleryAddDuotoneIcon = ({
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
        d="M20.9998 12.6281C20.9984 13.9507 20.9884 15.0748 20.9132 15.9973C20.826 17.0677 20.6473 17.9621 20.2473 18.705C20.0708 19.0326 19.854 19.3261 19.59 19.59C18.8409 20.3392 17.8864 20.6785 16.6769 20.8411C15.4952 21 13.9806 21 12.048 21H11.952C10.0194 21 8.50481 21 7.3231 20.8411C6.11356 20.6785 5.15912 20.3392 4.40998 19.59C3.74583 18.9259 3.40286 18.0993 3.22048 17.0739C3.04132 16.0665 3.00854 14.8133 3.00173 13.2571C3 12.8612 3 12.4425 3 12.0008V11.952C2.99999 10.0194 2.99998 8.50481 3.15886 7.3231C3.32148 6.11356 3.66083 5.15912 4.40998 4.40998C5.15912 3.66083 6.11356 3.32148 7.3231 3.15886C8.374 3.01757 9.72612 3.00193 11.3718 3.00021C11.7186 2.99985 12 3.28112 12 3.62791C12 3.97469 11.7185 4.25568 11.3717 4.25604C9.70274 4.25781 8.46076 4.27302 7.49044 4.40347C6.42015 4.54737 5.77489 4.82105 5.29797 5.29797C4.82105 5.77489 4.54737 6.42015 4.40347 7.49044C4.25715 8.57879 4.25581 10.0089 4.25581 12C4.25581 12.2431 4.25581 12.4783 4.2561 12.706L5.09426 11.9726C5.85719 11.305 7.00702 11.3433 7.72385 12.0602L11.3152 15.6516C11.8906 16.2269 12.7963 16.3054 13.462 15.8375L13.7117 15.6621C14.6696 14.9888 15.9657 15.0668 16.836 15.8501L19.2058 17.9828C19.4443 17.4819 19.5859 16.8238 19.6615 15.8953C19.7328 15.0205 19.7426 13.9579 19.744 12.6281C19.7443 12.2813 20.0253 12 20.3721 12C20.7189 12 21.0001 12.2813 20.9998 12.6281Z"
        fill={secondary}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.95 11.1C15.0408 11.1 14.0862 11.1 13.4931 10.5069C12.9 9.91378 12.9 8.95919 12.9 7.05C12.9 5.14081 12.9 4.18622 13.4931 3.59311C14.0862 3 15.0408 3 16.95 3C18.8592 3 19.8138 3 20.4069 3.59311C21 4.18622 21 5.14081 21 7.05C21 8.95919 21 9.91378 20.4069 10.5069C19.8138 11.1 18.8592 11.1 16.95 11.1ZM17.625 5.25C17.625 4.87721 17.3228 4.575 16.95 4.575C16.5772 4.575 16.275 4.87721 16.275 5.25V6.375H15.15C14.7772 6.375 14.475 6.67721 14.475 7.05C14.475 7.42279 14.7772 7.725 15.15 7.725H16.275V8.85C16.275 9.22279 16.5772 9.525 16.95 9.525C17.3228 9.525 17.625 9.22279 17.625 8.85V7.725H18.75C19.1228 7.725 19.425 7.42279 19.425 7.05C19.425 6.67721 19.1228 6.375 18.75 6.375H17.625V5.25Z"
        fill={fill}
      />
    </Svg>
  );
};

export default GalleryAddDuotoneIcon;
