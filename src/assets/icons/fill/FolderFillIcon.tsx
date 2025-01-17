import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const FolderFillIcon = ({ fill, size = 24 }: FillIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M16.487 3.919c-.138-.019-.303-.019-.632-.019H12l.333.345c.6.62.83.852 1.096 1.006q.232.134.488.21c.293.086.614.09 1.462.09h.301c.902 0 1.63 0 2.205.076q.215.027.415.073c-.167-.933-.896-1.656-1.813-1.781"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M3.062 5.933C3 6.263 3 6.66 3 7.455V13.8c0 3.394 0 5.091 1.054 6.146S6.806 21 10.2 21h3.6c3.394 0 5.091 0 6.146-1.054S21 17.194 21 13.8v-1.982c0-2.369 0-3.554-.692-4.324a3 3 0 0 0-.202-.201c-.77-.693-1.955-.693-4.324-.693h-.336c-1.039 0-1.558 0-2.042-.138a3.6 3.6 0 0 1-.763-.316C12.2 5.9 11.834 5.534 11.1 4.8l-.495-.495c-.246-.246-.37-.37-.499-.477a3.6 3.6 0 0 0-1.962-.812C7.977 3 7.803 3 7.454 3c-.794 0-1.19 0-1.521.062a3.6 3.6 0 0 0-2.87 2.87m9.163 4.267c0-.373.302-.675.675-.675h4.5a.675.675 0 1 1 0 1.35h-4.5a.675.675 0 0 1-.675-.675"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default FolderFillIcon;
