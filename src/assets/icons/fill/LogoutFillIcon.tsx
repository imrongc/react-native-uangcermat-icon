import { Svg, Path } from 'react-native-svg';
import type { FillIconType } from './FillIcon.type';

const LogoutFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M4 9.56757V14.4324C4 16.7258 4 17.8724 4.67916 18.5849C5.29618 19.2321 6.25485 19.2913 8.06443 19.2968C7.96881 18.6224 7.94883 17.8168 7.9438 16.8689C7.94166 16.4659 8.25138 16.1374 8.63556 16.1351C9.01975 16.1329 9.33293 16.4578 9.33507 16.8608C9.34071 17.9247 9.36705 18.6789 9.46727 19.2512C9.56384 19.8027 9.7189 20.1219 9.94471 20.3588C10.2014 20.6281 10.5618 20.8037 11.2424 20.8996C11.943 20.9985 12.8716 21 14.203 21H15.1305C16.4619 21 17.3904 20.9985 18.091 20.8996C18.7716 20.8037 19.132 20.6281 19.3888 20.3588C19.6455 20.0895 19.8128 19.7114 19.9043 18.9975C19.9985 18.2626 20 17.2885 20 15.8919V8.10811C20 6.71149 19.9985 5.73743 19.9043 5.0025C19.8128 4.28855 19.6455 3.91048 19.3888 3.6412C19.132 3.37192 18.7716 3.19635 18.091 3.10036C17.3904 3.00155 16.4619 3 15.1305 3H14.203C12.8716 3 11.943 3.00155 11.2424 3.10036C10.5618 3.19635 10.2014 3.37192 9.94471 3.6412C9.7189 3.87807 9.56384 4.19728 9.46727 4.74877C9.36705 5.32112 9.34071 6.07525 9.33507 7.1392C9.33293 7.54221 9.01975 7.8671 8.63556 7.86485C8.25138 7.86261 7.94166 7.53409 7.9438 7.13107C7.94883 6.18322 7.96881 5.37758 8.06443 4.70325C6.25485 4.70867 5.29618 4.76789 4.67916 5.41515C4 6.12759 4 7.27425 4 9.56757ZM6.29068 12.516C6.01901 12.231 6.01901 11.769 6.29068 11.484L8.14573 9.53806C8.41739 9.25308 8.85785 9.25308 9.12952 9.53806C9.40118 9.82304 9.40118 10.2851 9.12952 10.5701L8.46201 11.2703L15.1303 11.2703C15.5145 11.2703 15.8259 11.597 15.8259 12C15.8259 12.403 15.5145 12.7297 15.1303 12.7297L8.46201 12.7297L9.12952 13.4299C9.40118 13.7149 9.40118 14.177 9.12952 14.4619C8.85785 14.7469 8.41739 14.7469 8.14573 14.4619L6.29068 12.516Z"
        fill={fill}
      />
    </Svg>
  );
};

export default LogoutFillIcon;
