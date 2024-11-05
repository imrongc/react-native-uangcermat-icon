import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const QuestionFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9-3.825c-.56 0-1.012.453-1.012 1.012a.675.675 0 1 1-1.35 0 2.362 2.362 0 1 1 4.057 1.647l-.238.24c-.194.194-.365.364-.514.556-.197.253-.268.44-.268.595v.675a.675.675 0 1 1-1.35 0v-.675c0-.59.275-1.067.553-1.424.206-.265.464-.523.674-.733q.097-.095.174-.175A1.012 1.012 0 0 0 12 8.175m0 8.325a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default QuestionFillIcon;
