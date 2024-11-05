import { Svg, Path } from 'react-native-svg';
import type { OutlineIconType } from './OutlineIcon.type';

const LogoutOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M6.64175 12.444C6.40143 12.1988 6.40143 11.8012 6.64175 11.556L8.28276 9.88158C8.52308 9.63637 8.91272 9.63637 9.15304 9.88159C9.39336 10.1268 9.39336 10.5244 9.15304 10.7696L8.56254 11.3721L14.4614 11.3721C14.8013 11.3721 15.0768 11.6532 15.0768 12C15.0768 12.3468 14.8013 12.6279 14.4614 12.6279L8.56254 12.6279L9.15304 13.2304C9.39336 13.4756 9.39336 13.8732 9.15304 14.1184C8.91272 14.3636 8.52308 14.3636 8.28276 14.1184L6.64175 12.444Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5961 3H14.5066C15.6287 2.99998 16.5332 2.99997 17.2445 3.09756C17.9831 3.19887 18.6049 3.41562 19.0988 3.91955C19.5927 4.42348 19.8051 5.05798 19.9044 5.81156C20 6.53739 20 7.46027 20 8.60523V15.3948C20 16.5397 20 17.4626 19.9044 18.1884C19.8051 18.942 19.5927 19.5765 19.0988 20.0805C18.6049 20.5844 17.9831 20.8011 17.2445 20.9024C16.5332 21 15.6287 21 14.5066 21H13.5961C12.474 21 11.5695 21 10.8582 20.9024C10.1196 20.8011 9.49777 20.5844 9.0039 20.0805C8.67657 19.7465 8.4723 19.3544 8.34296 18.9068C7.56236 18.9058 6.91202 18.897 6.38511 18.8247C5.75829 18.7388 5.21484 18.5527 4.78104 18.11C4.34725 17.6674 4.16486 17.1129 4.08059 16.4733C3.99997 15.8614 3.99998 15.0864 4 14.138V9.86203C3.99998 8.91362 3.99997 8.13857 4.08059 7.52669C4.16486 6.88711 4.34725 6.33259 4.78104 5.88997C5.21484 5.44734 5.75829 5.26124 6.38511 5.17525C6.91202 5.10297 7.56236 5.09421 8.34296 5.09316C8.4723 4.64563 8.67657 4.25354 9.0039 3.91955C9.49777 3.41562 10.1196 3.19887 10.8582 3.09756C11.5695 2.99997 12.474 2.99998 13.5961 3ZM8.10413 16.1895C8.10708 16.7292 8.11581 17.2152 8.14588 17.6504C7.46118 17.6477 6.95217 17.6354 6.54911 17.5801C6.05876 17.5129 5.81832 17.3924 5.65132 17.222C5.48431 17.0516 5.3663 16.8063 5.30037 16.306C5.23206 15.7876 5.23076 15.0974 5.23076 14.093V9.90698C5.23076 8.90257 5.23206 8.21242 5.30037 7.69403C5.3663 7.1937 5.48431 6.94837 5.65132 6.77796C5.81832 6.60756 6.05876 6.48714 6.54911 6.41987C6.95217 6.36457 7.46118 6.35231 8.14588 6.3496C8.11581 6.7848 8.10708 7.27085 8.10413 7.81046C8.10224 8.15724 8.37622 8.43992 8.71607 8.44185C9.05593 8.44378 9.33298 8.16423 9.33487 7.81745C9.33986 6.90196 9.36316 6.25306 9.45182 5.76057C9.53725 5.28603 9.67442 5.01137 9.87417 4.80754C10.1013 4.57584 10.4201 4.42476 11.0221 4.34217C11.6419 4.25715 12.4633 4.25581 13.6411 4.25581H14.4616C15.6394 4.25581 16.4608 4.25715 17.0805 4.34217C17.6826 4.42476 18.0014 4.57584 18.2285 4.80754C18.4556 5.03925 18.6037 5.36457 18.6846 5.97889C18.7679 6.61128 18.7692 7.44942 18.7692 8.65116V15.3488C18.7692 16.5506 18.7679 17.3887 18.6846 18.0211C18.6037 18.6354 18.4556 18.9607 18.2285 19.1925C18.0014 19.4242 17.6826 19.5752 17.0805 19.6578C16.4608 19.7429 15.6394 19.7442 14.4616 19.7442H13.6411C12.4633 19.7442 11.6419 19.7429 11.0221 19.6578C10.4201 19.5752 10.1013 19.4242 9.87417 19.1925C9.67442 18.9886 9.53725 18.714 9.45182 18.2394C9.36316 17.7469 9.33986 17.098 9.33487 16.1826C9.33298 15.8358 9.05593 15.5562 8.71607 15.5581C8.37622 15.5601 8.10224 15.8428 8.10413 16.1895Z"
        fill={fill}
      />
    </Svg>
  );
};

export default LogoutOutlineIcon;
