import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const MyLoansFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M6.963 3h10.074c.275 0 .413 0 .529.01 1.289.12 2.311 1.206 2.424 2.576.01.123.01.27.01.562v13.286c0 .785-.941 1.118-1.385.49a.743.743 0 0 0-1.23 0L17 20.47c-.5.708-1.5.708-2 0s-1.5-.708-2 0-1.5.708-2 0-1.5-.708-2 0-1.5.708-2 0l-.385-.545a.743.743 0 0 0-1.23 0C4.94 20.552 4 20.22 4 19.434V6.148c0-.293 0-.439.01-.562.113-1.37 1.135-2.455 2.424-2.575C6.55 3 6.688 3 6.963 3m3.404 10.09L9.355 11.3H8.92v1.789H8V8.5h1.723q.532 0 .907.19.374.184.56.507.19.315.19.71 0 .455-.263.822-.263.362-.783.5l1.098 1.86zm-.677-2.48h-.77V9.264h.77q.375 0 .559.177.184.17.184.487 0 .322-.184.506-.185.178-.56.178m3.93-1.051q-.31.164-.487.414v-.526h-.92v5.379h.92V12.57q.191.25.493.415.31.165.71.164.468 0 .842-.237a1.63 1.63 0 0 0 .598-.664q.225-.434.224-.993 0-.559-.224-.98a1.59 1.59 0 0 0-1.44-.887q-.4 0-.716.17m1.44 1.696q0-.329-.138-.565a.932.932 0 0 0-1.302-.362.96.96 0 0 0-.355.368 1.2 1.2 0 0 0-.132.572q0 .33.132.572.138.244.355.375.224.126.473.125a.945.945 0 0 0 .829-.506q.138-.243.138-.579"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default MyLoansFillIcon;
