import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const PenFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="m11.46 17.545 6.656-6.656a9.3 9.3 0 0 1-2.993-2.011 9.3 9.3 0 0 1-2.012-2.994L6.455 12.54c-.52.52-.78.78-1.003 1.066q-.396.508-.673 1.09c-.157.327-.273.676-.505 1.373l-1.225 3.675a.954.954 0 0 0 1.207 1.207l3.675-1.225c.697-.232 1.046-.348 1.373-.505q.583-.277 1.09-.673c.287-.224.547-.483 1.066-1.003M19.963 9.042a3.54 3.54 0 0 0-5.005-5.005l-.798.798q.016.05.034.1a7.9 7.9 0 0 0 1.883 2.988 7.9 7.9 0 0 0 3.088 1.917z"
      />
    </Svg>
  );
};

export default PenFillIcon;
