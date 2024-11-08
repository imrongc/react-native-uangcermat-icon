import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const GroupOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M9.805 3a4.17 4.17 0 1 0 0 8.341 4.17 4.17 0 0 0 0-8.341M6.95 7.17a2.854 2.854 0 1 1 5.708 0 2.854 2.854 0 0 1-5.708 0"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        d="M15.073 3.878a.659.659 0 1 0 0 1.317 1.976 1.976 0 0 1 0 3.951.659.659 0 1 0 0 1.317 3.293 3.293 0 1 0 0-6.585"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M5.132 13.774c1.229-.702 2.882-1.115 4.673-1.115s3.444.413 4.673 1.115c1.21.692 2.132 1.747 2.132 3.055s-.922 2.364-2.132 3.055C13.249 20.588 11.595 21 9.805 21s-3.444-.413-4.673-1.116C3.922 19.194 3 18.138 3 16.83s.922-2.363 2.132-3.055m.653 1.144c-1.014.58-1.468 1.28-1.468 1.911 0 .632.454 1.332 1.468 1.912.996.569 2.416.942 4.02.942s3.023-.373 4.02-.942c1.014-.58 1.468-1.28 1.468-1.912s-.454-1.332-1.469-1.912c-.996-.569-2.415-.941-4.02-.941-1.603 0-3.023.372-4.019.941"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        d="M17.848 13.552a.658.658 0 1 0-.282 1.286c.696.153 1.252.415 1.619.715.367.301.498.595.498.837 0 .22-.106.479-.398.75-.294.273-.746.526-1.329.701a.659.659 0 0 0 .38 1.261c.723-.217 1.368-.554 1.846-.997.479-.445.818-1.031.818-1.715 0-.76-.416-1.394-.98-1.856-.566-.462-1.327-.797-2.172-.982"
      />
    </Svg>
  );
};

export default GroupOutlineIcon;
