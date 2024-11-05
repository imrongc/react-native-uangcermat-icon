import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const LoanSaleFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M17.037 3H6.963c-.275 0-.413 0-.529.01-1.289.12-2.311 1.206-2.424 2.576-.01.123-.01.27-.01.562v13.286c0 .785.941 1.118 1.385.49a.743.743 0 0 1 1.23 0L7 20.47c.5.708 1.5.708 2 0s1.5-.708 2 0 1.5.708 2 0 1.5-.708 2 0 1.5.708 2 0l.385-.545a.743.743 0 0 1 1.23 0c.444.628 1.385.295 1.385-.49V6.148c0-.293 0-.439-.01-.562-.113-1.37-1.135-2.455-2.424-2.575C17.45 3 17.312 3 17.037 3m-7.26 7.65c.492 0 .89-.403.89-.9s-.398-.9-.89-.9a.894.894 0 0 0-.888.9c0 .497.398.9.889.9m5.361-.873a.68.68 0 0 0 0-.954.66.66 0 0 0-.943 0l-5.333 5.4a.68.68 0 0 0 0 .954.66.66 0 0 0 .943 0zm-.916 5.373c.491 0 .89-.403.89-.9s-.399-.9-.89-.9a.894.894 0 0 0-.889.9c0 .497.398.9.89.9"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default LoanSaleFillIcon;
