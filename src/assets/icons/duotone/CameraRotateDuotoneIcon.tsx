import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const CameraRotateDuotoneIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.31496 5.83521C8.53835 4.76044 9.51423 4 10.6323 4H13.3677C14.4858 4 15.4616 4.76044 15.685 5.83521C15.7366 6.08332 15.966 6.26532 16.2045 6.26532H16.2182L16.2319 6.26591C17.4069 6.31626 18.3094 6.45757 19.0628 6.94201C19.5375 7.24724 19.9459 7.63994 20.2641 8.09816C20.66 8.66828 20.8346 9.32262 20.9183 10.114C21 10.8872 21 11.8564 21 13.0839V13.1538C21 14.3814 21 15.3505 20.9183 16.1238C20.8346 16.9151 20.66 17.5695 20.2641 18.1396C19.9459 18.5978 19.5375 18.9905 19.0628 19.2957C18.4739 19.6744 17.7987 19.8414 16.9798 19.9215C16.178 20 15.1723 20 13.8951 20H10.105C8.82779 20 7.82202 20 7.02025 19.9215C6.20131 19.8414 5.52612 19.6744 4.93718 19.2957C4.46245 18.9905 4.05409 18.5978 3.7359 18.1396C3.34001 17.5695 3.1654 16.9151 3.08173 16.1238C2.99999 15.3505 2.99999 14.3814 3 13.1538V13.0839C2.99999 11.8564 2.99999 10.8872 3.08173 10.114C3.1654 9.32262 3.34001 8.66828 3.7359 8.09816C4.05409 7.63994 4.46245 7.24724 4.93718 6.94201C5.69065 6.45757 6.59313 6.31626 7.7681 6.26591L7.78181 6.26532H7.79553C8.03404 6.26532 8.26339 6.08332 8.31496 5.83521ZM14.1094 8.9231C14.4562 8.9231 14.7373 9.19861 14.7373 9.53848V10.9169C14.7373 11.2079 14.5293 11.4591 14.2388 11.5191L12.9665 11.7817C12.6272 11.8517 12.2941 11.6389 12.2227 11.3063C12.1613 11.0208 12.3127 10.7398 12.5716 10.6217C11.8841 10.424 11.1107 10.5908 10.5684 11.1223C9.77792 11.897 9.77792 13.1531 10.5684 13.9278C11.3589 14.7025 12.6405 14.7025 13.431 13.9278C13.768 13.5975 13.9608 13.1812 14.0108 12.751C14.05 12.4133 14.3611 12.1707 14.7056 12.2091C15.0502 12.2475 15.2977 12.5524 15.2585 12.8901C15.1777 13.587 14.864 14.2639 14.319 14.7981C13.0381 16.0534 10.9613 16.0534 9.68041 14.7981C8.3995 13.5427 8.3995 11.5074 9.68041 10.252C10.709 9.24396 12.2507 9.04538 13.4815 9.65626V9.53848C13.4815 9.19861 13.7626 8.9231 14.1094 8.9231Z"
        fill={secondary}
      />
      <Path
        d="M14.7373 9.53824C14.7373 9.19837 14.4562 8.92285 14.1094 8.92285C13.7626 8.92285 13.4815 9.19837 13.4815 9.53824V9.65602C12.2507 9.04513 10.709 9.24372 9.68041 10.2518C8.3995 11.5071 8.3995 13.5425 9.68041 14.7978C10.9613 16.0532 13.0381 16.0532 14.319 14.7978C14.864 14.2637 15.1777 13.5867 15.2585 12.8898C15.2977 12.5522 15.0502 12.2473 14.7056 12.2088C14.3611 12.1704 14.05 12.413 14.0108 12.7507C13.9608 13.181 13.768 13.5972 13.431 13.9276C12.6405 14.7023 11.3589 14.7023 10.5684 13.9276C9.77792 13.1528 9.77792 11.8968 10.5684 11.1221C11.1107 10.5906 11.8841 10.4237 12.5716 10.6215C12.3127 10.7395 12.1613 11.0205 12.2227 11.3061C12.2941 11.6387 12.6272 11.8515 12.9665 11.7814L14.2388 11.5188C14.5293 11.4589 14.7373 11.2076 14.7373 10.9167V9.53824Z"
        fill={fill}
      />
    </Svg>
  );
};

export default CameraRotateDuotoneIcon;
