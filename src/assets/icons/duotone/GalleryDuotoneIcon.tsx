import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const GalleryDuotoneIcon = ({
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
        d="M17.0233 8.65098C17.0233 9.57574 16.2736 10.3254 15.3488 10.3254C14.4241 10.3254 13.6744 9.57574 13.6744 8.65098C13.6744 7.72623 14.4241 6.97656 15.3488 6.97656C16.2736 6.97656 17.0233 7.72623 17.0233 8.65098Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.952 3H12.048C13.9806 2.99999 15.4952 2.99998 16.6769 3.15886C17.8864 3.32148 18.8409 3.66083 19.59 4.40997C20.3392 5.15912 20.6785 6.11356 20.8411 7.3231C21 8.50481 21 10.0194 21 11.952V12.0259C21 13.6239 21 14.9321 20.9132 15.9973C20.826 17.0677 20.6473 17.9621 20.2473 18.705C20.0708 19.0326 19.854 19.3261 19.59 19.59C18.8409 20.3392 17.8864 20.6785 16.6769 20.8411C15.4952 21 13.9806 21 12.048 21H11.952C10.0194 21 8.50481 21 7.3231 20.8411C6.11356 20.6785 5.15912 20.3392 4.40997 19.59C3.74583 18.9259 3.40286 18.0993 3.22048 17.0739C3.04132 16.0665 3.00854 14.8133 3.00173 13.2571C3 12.8612 3 12.4425 3 12.0008L3 11.952C2.99999 10.0194 2.99998 8.50481 3.15886 7.3231C3.32148 6.11356 3.66083 5.15912 4.40997 4.40997C5.15912 3.66083 6.11356 3.32148 7.3231 3.15886C8.50481 2.99998 10.0194 2.99999 11.952 3ZM7.49044 4.40347C6.42015 4.54737 5.77489 4.82105 5.29797 5.29797C4.82105 5.77489 4.54737 6.42015 4.40347 7.49044C4.25715 8.57879 4.25581 10.0089 4.25581 12C4.25581 12.4426 4.25582 12.8587 4.25753 13.2516C4.2644 14.8206 4.29947 15.9689 4.45689 16.8539C4.61109 17.7209 4.87345 18.2775 5.29797 18.702C5.77489 19.179 6.42015 19.4526 7.49044 19.5965C8.57879 19.7429 10.0089 19.7442 12 19.7442C13.9911 19.7442 15.4212 19.7429 16.5096 19.5965C17.5799 19.4526 18.2251 19.179 18.702 18.702C18.8778 18.5263 19.0218 18.3319 19.1416 18.1096C19.4192 17.5939 19.5793 16.9042 19.6615 15.8953C19.7437 14.8869 19.7442 13.6291 19.7442 12C19.7442 10.0089 19.7429 8.57879 19.5965 7.49044C19.4526 6.42015 19.179 5.77489 18.702 5.29797C18.2251 4.82105 17.5799 4.54737 16.5096 4.40347C15.4212 4.25715 13.9911 4.25581 12 4.25581C10.0089 4.25581 8.57879 4.25715 7.49044 4.40347Z"
        fill={fill}
      />
      <Path
        opacity={0.4}
        d="M19.2057 17.9832L16.836 15.8505C15.9657 15.0672 14.6697 14.9892 13.7117 15.6625L13.462 15.8379C12.7963 16.3058 11.8906 16.2273 11.3153 15.652L7.72387 12.0606C7.00704 11.3438 5.8572 11.3055 5.09428 11.973L4.25612 12.7064C4.25635 12.8931 4.25678 13.0748 4.25755 13.2518C4.26442 14.8208 4.29948 15.9691 4.45691 16.8542C4.61111 17.7211 4.87347 18.2777 5.29799 18.7022C5.77491 19.1792 6.42016 19.4528 7.49045 19.5967C8.57881 19.7431 10.0089 19.7444 12 19.7444C13.9911 19.7444 15.4212 19.7431 16.5096 19.5967C17.5799 19.4528 18.2251 19.1792 18.702 18.7022C18.8778 18.5265 19.0219 18.3321 19.1416 18.1098C19.1637 18.0687 19.1851 18.0266 19.2057 17.9832Z"
        fill={secondary}
      />
    </Svg>
  );
};

export default GalleryDuotoneIcon;